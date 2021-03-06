export const LocalStorageService = (function(){
    var _service;
    function _getService() {
        if(!_service) {
          _service = this;
          return _service
      }
      return _service
    }
    function _setAccessToken(tokenObj) {
      localStorage.setItem('access_token', tokenObj);
    }
    function _setRefreshToken(tokenObj) {
      localStorage.setItem('refresh_token', tokenObj);
    }
    function _getAccessToken() {
      return localStorage.getItem('access_token');
    }
    function _getRefreshToken() {
      return localStorage.getItem('refresh_token');
    }
    function _clearToken() {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
    }
   return {
      getService : _getService,
      setAccessToken: _setAccessToken,
      setRefreshToken: _setRefreshToken,
      getAccessToken : _getAccessToken,
      getRefreshToken : _getRefreshToken,
      clearToken : _clearToken
    }
   })();
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if(serializedState === null){
            return undefined;
        }
        return JSON.parse(serializedState);

    } catch (error) {
        return undefined;
    }
}

export const saveState = (state) => {
  try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state',serializedState);
  } catch (error) {
  }
}