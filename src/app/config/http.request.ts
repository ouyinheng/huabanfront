'use strict';
let http = new XMLHttpRequest();//IE7+

export const oxios = (
  methods: 'post' | 'get' | 'POST' | 'GET',
  url: string,
  params:any
) => {
  return new Promise((resolve, reject) => {
    http.onreadystatechange = () => {
      if(http.readyState == 4 ) {
        if(http.status == 200) {
          return resolve(http.responseText)
        } else {
          return reject(http.status);
        }
      } 
    }
    http.open(methods, url, true)
    http.send(params)
  })
}