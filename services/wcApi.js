import axios from 'axios'
import OAuth from 'oauth-1.0a'
import crypto from 'crypto-browserify'

class WCAPI {
    
    constructor()  {
        this.consumerKey = 'ck_45f0b15cd0456c5c3631711660a8c0d07c1c2890';
        this.consumerSecret = 'cs_1625f4bfcbe1f431cc4acaed34795a3a10b2eee7';
        this.timeout = 6000;
        this.baseURL = 'http://wpcontact.test/wp-json/wc/v3'
        this._request = axios.create({
            baseURL: this.baseURL,
            timeout: this.timeout
        })
    }

    _getOAuth() {
        const data = {
          consumer: {
            key: this.consumerKey,
            secret: this.consumerSecret
          },
          signature_method: 'HMAC-SHA1',
          hash_function: (base_string, key) => {
            return crypto
              .createHmac('sha1', key)
              .update(base_string)
              .digest('base64')
          }
        }
    
        return new OAuth(data)
      }

    // GET requests work
    static _normalizeQueryString(params) {
        if (!params) {
            return ''
        }

        let queryString = ''
        const params_list = []

        for (const p in params) {
            params_list.push(p)
        }
        
        params_list.sort()

        for (const i in params_list) {
            if (queryString.length) {
                queryString += '&'
            }

            queryString += encodeURIComponent(params_list[i]).replace('%5B', '[').replace('%5D', ']')
            queryString += '='
            queryString += encodeURIComponent(params[params_list[i]])
        }

        return '?' + queryString
    }

    get(endpoint, params = null) {
        const method = 'GET'
        const queryString = WCAPI._normalizeQueryString(params)
    
        this._request.interceptors.request.use(config => {
          console.log(queryString)
          return config
        })
    
        const oauth_params = this._getOAuth().authorize({
          url: this.baseURL + endpoint + queryString,
          method: method
        })
    
        return this._request.get(endpoint, {
          params: { ...params, ...oauth_params }
        })
    }

    post(endpoint, data_params, params = null) {
        const method = 'POST'
        const oauth_params = this._getOAuth().authorize({
          url: this.baseURL + endpoint + WCAPI._normalizeQueryString(params),
          method: method
        })
      
        return this._request.post(endpoint, data_params, {
          params: oauth_params
        })
    }
}

export default WCAPI;