

const getBrowserName =()=>{

  let browser ="unkown";

  const userAgent = navigator.userAgent;
  // 브라우저 이름

  // Chrome browser
  browser = (/chrome|crios/i)
    .test(userAgent)
    ? 'Chrome' : browser;

  // Safari browser
  browser = (/safari/i)
    .test(userAgent) &&
  !(/chromium|edg|ucbrowser|chrome|crios|opr|opera|fxios|firefox/i)
    .test(userAgent)
    ? 'Safari' : browser;

  // Edge browser
  browser=(/edg/i)
    .test(userAgent)
    ? 'Edge' : browser;



  // Firebase browser
  browser = (/firefox|fxios/i)
    .test(userAgent)
  && !(/seamonkey/i)
    .test(userAgent)
    ? 'Firefox' : browser;

  return browser;
}




const getBrowserVersion = () => {

  const userAgent = navigator.userAgent;

  let browserName = getBrowserName();

  switch (browserName) {
    case 'Chrome':
      return `${browserName}/${browserVersion(userAgent, /(chrome|crios)\/([\d\.]+)/i)}`;

    case 'Safari':
      return `${browserName}/${browserVersion(userAgent, /(safari)\/([\d\.]+)/i)}`;

    case 'Edge':
      return `${browserName}/${browserVersion(userAgent, /(edge|edga|edgios|edg)\/([\d\.]+)/i)}`;

    case 'Firefox':
      return `${browserName}/${browserVersion(userAgent, /(firefox)\/([\d\.]+)/i)}`;


    default :
      return 'unkown/0.0.0.0';

  }


}



const browserVersion = (userAgent,regex) => {
  // return userAgent.match(regex)[2];
  return userAgent.match(regex) ? userAgent.match(regex)[2]: null;
}

alert(getBrowserVersion());

//
// }
