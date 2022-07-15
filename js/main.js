const getBrowserName =()=>{
  let browser = "unkown";

  const userAgent = navigator.userAgent;
  // 브라우저 이름

  // Chrome browser
  browser = (/chrome|chrios/i).test(userAgent)
    ? 'Chrome' : browser;

  // Safari browser
  browser = (/safari/i).test(userAgent) &&
  !(/chromium|edg|ucbrowser|chrome|crios|opr|opera|fxios|firefox/i).test(userAgent)
    ? 'Safari' : browser;

  // Edge browser
  browser = (/edg/i).test(userAgent)
    ? 'Edge' : browser;

  // Firebase browser
  browser = (/firefox|fxios/i).test(userAgent) && !(/seamonkey/i)
    .test(userAgent)
    ? 'Firefox' : browser;
  return browser;

}



const getBrowserVersion = () => {

  const userAgent = navigator.userAgent;

  let browserName = getBrowserName();



  let pcDevice = "win|16|win32|win65|mac|macintel";

  if(navigator.platform){
    if(pcDevice.indexOf(navigator.platform.toLowerCase())<0){
      switch (browserName) {
        case 'Chrome':
          // crios 모바일 크롬 브라우저
          // chrome Pc 크롬 브라우저
          return `${browserName}/${browserVersion(userAgent, /(chrome|crios)\/([\d\.]+)/i)}+ Mobile`;

        case 'Safari':
          return `${browserName}/${browserVersion(userAgent, /(safari)\/([\d\.]+)/i)}+ Mobile`;

        case 'Edge':
          return `${browserName}/${browserVersion(userAgent, /(edge|edga|edgios|edg)\/([\d\.]+)/i)}+ Mobile`;
        // firefox pc 크롬 브라우저
        // fxios 모바일 크롬 브라우저

        case 'Firefox':
          return `${browserName}/${browserVersion(userAgent, /(firefox|fxios)\/([\d\.]+)/i)} + Mobile`;

        default :
          return 'unkown/0.0.0.0';

      }

    }else{

      switch (browserName) {
        case 'Chrome':
          // crios 모바일 크롬 브라우저
          // chrome Pc 크롬 브라우저
          return `${browserName}/${browserVersion(userAgent, /(chrome|crios)\/([\d\.]+)/i)}+ PC`;

        case 'Safari':
          return `${browserName}/${browserVersion(userAgent, /(safari)\/([\d\.]+)/i)}+ PC`;

        case 'Edge':
          return `${browserName}/${browserVersion(userAgent, /(edge|edga|edgios|edg)\/([\d\.]+)/i)}+ PC`;
        // firefox pc 크롬 브라우저
        // fxios 모바일 크롬 브라우저

        case 'Firefox':
          return `${browserName}/${browserVersion(userAgent, /(firefox|fxios)\/([\d\.]+)/i)} + PC`;

        default :
          return 'unkown/0.0.0.0';

      }
      
    }

  }




}






const browserVersion = (userAgent,regex) => {
  return userAgent.match(regex)[2];
}



alert(getBrowserVersion());

