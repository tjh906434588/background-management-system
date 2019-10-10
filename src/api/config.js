export const icons = {
  'sports-teach-manager': 'teach',
  'sports-exercise-manager': 'exercise',
  'sports-score-manager': 'score',
  'school-manager': 'school',
  'system-manager': 'system',
  'message-center': 'message',
  'physique-test-manager': 'physique',
  'nav-gymnasium': 'gymnasium'
}

let imgUri
let baseUri
let uploadUri
let templateUri

// 判断当前的环境，根据不同的环境选择不同的连接
if (process.env.NODE_ENV === 'development') {
  switch (process.env.buildType) {
    case 'test':
      baseUri = '//test.328ym.com/cms-school'
      uploadUri = '//test.328ym.com/smsapi'
      imgUri = '//test.328ym.com/smsapi/images/get/'
      templateUri = '//test.328ym.com/schoolFile/template/'
      break
    default:
      baseUri = '//dev.328ym.com/cms-school'
      uploadUri = '//dev.328ym.com/smsapi'
      imgUri = '//dev.328ym.com/smsapi/images/get/'
      templateUri = '//dev.328ym.com/schoolFile/template/'
      break
  }
} else {
  switch (process.env.buildType) {
    case 'dev':
      baseUri = '//dev.328ym.com/cms-school'
      uploadUri = '//dev.328ym.com/smsapi'
      imgUri = '//dev.328ym.com/smsapi/images/get/'
      templateUri = '//dev.328ym.com/schoolFile/template/'
      break
    case 'test':
      baseUri = '//test.328ym.com/cms-school'
      uploadUri = '//test.328ym.com/smsapi'
      imgUri = '//test.328ym.com/smsapi/images/get/'
      templateUri = '//test.328ym.com/schoolFile/template/'
      break
    case 'hw':
      baseUri = '//hwy.328ym.com/cms-school'
      uploadUri = '//hwy.328ym.com/smsapi'
      imgUri = '//hwy.328ym.com/smsapi/images/get/'
      templateUri = '//hwy.328ym.com/schoolFile/template/'
      break
    default:
      baseUri = '//hwy.328ym.com/cms-school'
      uploadUri = '//hwy.328ym.com/smsapi'
      imgUri = '//hwy.328ym.com/smsapi/images/get/'
      templateUri = '//www.328ym.com/schoolFile/template/'
      break
  }
}
export const baseUrl = baseUri
export const uploadUrl = uploadUri
export const ImgUrl = imgUri
export const templateUrl = templateUri
