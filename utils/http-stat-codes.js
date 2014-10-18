var TINYHTTP = {
  'CONTINUE' : 100,
  'SWTPROTO' : 101,
  'OK' : 200,
  'CREATED' : 201,
  'ACCEPTED' : 202,
  'NAUTHINFO' : 203,
  'NOCONTENT' : 204,
  'RTCONTENT' : 205,
  'PTCONTENT' : 206,
  'MULCHOICE' : 300,
  'MOVPERMNT' : 301,
  'FOUND' : 302,
  'SEEOTHER' : 303,
  'NOTMODIFY' : 304,
  'USEPROXY' : 305,
  'TEMPREDIR' : 307,
  'BADREQUEST' : 400,
  'UNAUTHRIZD' : 401,
  'PAYREQURD' : 402,
  'FORBIDDEN' : 403,
  'NOTFOUND' : 404,
  'MTHDNOTALW' : 405,
  'NOTACCEPT' : 406,
  'PROXYAUTHR' : 407,
  'REQTIMEOUT' : 408,
  'CONFLICT' : 409,
  'GONE' : 410,
  'LENGTHREQ' : 411,
  'PRECONFAIL' : 412,
  'REQENTLARG' : 413,
  'REQURILONG' : 414,
  'UNSUPMEDIA' : 415,
  'REQRANGENS' : 416,
  'EXPECTFAIL' : 417,
  'INTSRVERR' : 500,
  'NOTIMPLMNT' : 501,
  'BADGATEWAY' : 502,
  'UNAVAILSRV' : 503,
  'GATETIMEOUT' : 504,
  'HTTPNOTSUP' : 505
},
HTTP = {
  'CONTINUE' : 100,
  'SWITCHPROTO' : 101,
  'OK' : 200,
  'CREATED' : 201,
  'ACCEPTED' : 202,
  'NONAUTHINFOR' : 203,
  'NOCONTENT' : 204,
  'RESETCONTENT' : 205,
  'PARTIALCONTENT' : 206,
  'MULTIPLCHOICES' : 300,
  'MOVEDPERMNTLY' : 301,
  'FOUND' : 302,
  'SEEOTHER' : 303,
  'NOTMODIFIED' : 304,
  'USEPROXY' : 305,
  'TEMPREDIR' : 307,
  'BADREQUEST' : 400,
  'UNAUTHORIZED' : 401,
  'PAYREQUIRED' : 402,
  'FORBIDDEN' : 403,
  'NOTFOUND' : 404,
  'METHODNOTALLOWED' : 405,
  'NOTACCEPTABLE' : 406,
  'PROXYAUTHREQUIRED' : 407,
  'REQTIMEOUT' : 408,
  'CONFLICT' : 409,
  'GONE' : 410,
  'LENGTHREQUIRED' : 411,
  'PRECONDFAILED' : 412,
  'REQENTITYTOOLARG' : 413,
  'REQURITOOLONG' : 414,
  'UNSUPMEDIATYPE' : 415,
  'REQRANGENOTSATISFIABLE' : 416,
  'EXPECTFAILED' : 417,
  'INTERNSERVERERROR' : 500,
  'NOTIMPLEMENTED' : 501,
  'BADGATEWAY' : 502,
  'UNAVAILABLESERVICE' : 503,
  'GATETIMEOUT' : 504,
  'HTTPVERNOTSUPPORTED' : 505
};

module.exports.getStatusCode = function ( status, tiny ) {
  tiny = typeof tiny === 'undefined' ? true : tiny;
    
  if (tiny)
  {
    return TINYHTTP[status];
  }

  return HTTP[status];
};