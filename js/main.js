


const getBrowserVesrion = () => {
  const userAgent = navigator.userAgent;
  let browser = "unkown";

  // Chrome browser => test
  browser = (/chrome|crios/i).test(userAgent) && !(/opr|opera|chromium|edg|ucbrowser|googlebot/i).test(userAgent) ? 'Chrome' : browser;

  // safari browser => test
  browser = (/safari/i).test(userAgent) && !(/chromium|edg|ucbrowser|chrome|crios|opr|opera|fxios|firefox/i).test(userAgent) ? 'Safari' : browser;

  // Edge browser=> test
  browser=(/edg/i).test(userAgent) ? 'Edge' : browser;

  // Firebase browser => test
  browser = (/firefox|fxios/i).test(userAgent) && !(/seamonkey/i).test(userAgent) ? 'Firefox' : browser;

  // IE browser => test
  browser = (/; msie|trident/i).test(userAgent) && !(/ucbrowser/i).test(userAgent) ? 'IE' : browser;


  // browser version check
  switch (browser) {

    case 'Chrome':
        return `${browser}/${browserVersion(userAgent,/(chrome)\/([\d\.]+)/i)}`;
    case 'Safari':
        return  `${browser}/${browserVersion(userAgent,/(safari)\/([\d\.]+)/i)}`;
    case 'Edge':
        return `${browser}/${browserVersion(userAgent,/(edge|edga|edgios|edg)\/([\d\.]+)/i)}`;
    case 'Firefox':
        return `${browser}/${browserVersion(userAgent,/(firefox|fxios)\/([\d\.]+)/i)}`;

    case 'IE': const version = browserVersion(userAgent,/(trident)\/([\d\.]+)/i);
      // IE version is mapped using trident version
      // IE/8.0 = Trident/4.0, IE/9.0 = Trident/5.0
      return version ? `${browser}/${parseFloat(version) + 4.0}` : `${browser}/7.0`;

    default :
        return 'unkown/0.0.0.0';

  }
}


const browserVersion = (userAgent,regex) => {
  return userAgent.match(regex) ? userAgent.match(regex)[2] : null;
}


const getBrowseTest=()=>{

  let userAgent2 = navigator.userAgent;


  return userAgent2;
}


alert(getBrowserVesrion())

//
// }
