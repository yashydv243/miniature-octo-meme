import styles from "../styles/home.module.css"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import Head from "next/head"

export default function Home() {
  const [days, setDays] = useState('')
  const [hours, setHours] = useState("")
  const [minutes, setMinutes] = useState('')
  const [second, setSecond] = useState("")
  const [seeMore, setSeeMore] = useState(false)
  const [morePlans, setMorePlans] = useState(false)
  useEffect(() => {
    const sec = 1000,
      min = sec * 60,
      hour = min * 60,
      day = hour * 24;
    const end = new Date("Oct 18, 2022 24:00:00").getTime();
    const int = setInterval(() => {
      const current = new Date().getTime();
      const remaining = end - current;
      setDays(Math.floor(remaining / day))
      setHours(Math.floor((remaining % day) / hour))
      setMinutes(Math.floor((remaining % hour) / min))
      setSecond(Math.floor((remaining % min) / sec))
    }, 1000);
  }, [])

  const reviews = [
    {
      id: 0,
      title: "Great purchase and Support team!",
      desc: "Great purchase and Support team! I purchased a subscription and received a free domain along with a lot of help getting it up and going along with moving over my other domain.",
      name: "Jayanta Brijesh Joshi"
    },
    {
      id: 1,
      title: "Over 4 months and no issues at all.",
      desc: `I'm on a "Premium Shared Hosting" plan. I've installed several websites and everything works just fine up to this point. Great customer service too 👌 Keep it up.`,
      name: "Jitender Mukesh Misra"
    },
    {
      id: 2,
      title: "I'm in love with Hostinger",
      desc: "I'm in love with Hostinger, from an end user's perspective to an affiliate's perspective. They have amazing support, both live chat, e-mail, and account manager. Never had any issues with hosting, and cloud hosting is extremely FAST!! I always recommend it to my clients. I've used several hosting providers, there was not one that was better than hosting in everything; control panel, support, prices, performance, etc. Again, I'm in love with hostinger!",
      name: "Anup Ranjit Korrapati"
    },
    {
      id: 3,
      title: "Hostinger The Best",
      desc: "Hostinger hosting is the best hosting I have dealt with in two years. The servers are responsive and fast A support team deserving of respect",
      name: "Srinivas Bahadur Singh"
    },
  ]
  const [currReview, setCurrReview] = useState(0)
  const Service = ({ title, desc }) => {
    return <div className={styles.service}>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  }
  return <>
    <Head>
      <title>Choose Hostinger and Host Your Site for Only ₹129.00/mo</title>
    </Head>
    <div className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <h1>Savings to Set Your Website in Motion <br /></h1>
        <span><sup>₹</sup>149.00<span>/mo</span></span>
        <p>Get things moving with a free domain, lifetime SSL, and DDoS protection included with a four-year subscription.</p>
        <div className={styles.time}>
          <span data="days">{days}</span>
          <span data="hours">{hours}</span>
          <span data="minutes">{minutes}</span>
          <span data="seconds">{second}</span>
        </div>
        <div className={styles.button}>
          Get Started
        </div>
        <p style={{ marginTop: '0rem' }}>Get exclusive 30-day money-back guarantee</p>
      </div>
    </div>

    <div className={styles.trustSection}>
      <svg data-v-2cc27dd5="" fill="none" height="36" viewBox="0 0 163 36" width="163" xmlns="http://www.w3.org/2000/svg" title="wordpress" className="mr-25 ml-25 mr-35-xl ml-35-xl"><g fill="#b6bdd3"><path clipRule="evenodd" d="m95.5707 14.1702h-6.2458v.6625c1.9536 0 2.2677.4187 2.2677 2.8962v4.4664c0 2.4773-.3138 2.9309-2.2677 2.9309-1.4999-.2092-2.5122-1.0119-3.9078-2.5471l-1.6049-1.7445c2.1631-.3843 3.3143-1.7447 3.3143-3.2802 0-1.9186-1.6395-3.3842-4.7102-3.3842h-6.1409v.6625c1.9536 0 2.2677.4187 2.2677 2.8962v4.4664c0 2.4773-.3141 2.9309-2.2677 2.9309v.6629h6.9433v-.6629c-1.9536 0-2.2677-.4536-2.2677-2.9309v-1.2558h.5929l3.8732 4.8496h10.1536c4.9893 0 7.1533-2.6515 7.1533-5.8271 0-3.1751-2.164-5.7918-7.1533-5.7918zm-14.6197 5.6869v-4.6401h1.4303c1.5699 0 2.268 1.0816 2.268 2.3377 0 1.2214-.6981 2.3027-2.268 2.3027h-1.4303zm14.4802 4.8504h.2444c3.6284 0 4.2913-2.652 4.2913-4.7802 0-2.0588-.6626-4.7103-4.2913-4.7103h-1.6748v7.5716c0 1.6051.1746 1.9189 1.4304 1.9189z" fillRule="evenodd"></path><path d="m56.8408 21.1488 2.4076-7.1184c.6981-2.0586.3841-2.6515-1.849-2.6515v-.6981h6.5596v.6981c-2.1981 0-2.7214.5233-3.5938 3.0705l-3.978 11.933h-.4534l-3.5593-10.9214-3.6285 10.9214h-.4536l-3.8729-11.933c-.8374-2.5472-1.3957-3.0705-3.4195-3.0705v-.6981h7.746v.6981c-2.0588 0-2.6173.4883-1.8842 2.6515l2.3376 7.1184 3.5241-10.468h.6632z"></path><g clipRule="evenodd" fillRule="evenodd"><path d="m61.7266 19.9617c0 3.4548 3.1403 6.2808 6.9782 6.2808 3.8382 0 6.9783-2.826 6.9783-6.2808 0-3.4192-3.1401-6.2458-6.9783-6.2458-3.8376 0-6.9782 2.8266-6.9782 6.2458zm2.6515.0004c0-2.2681 1.1168-5.1637 4.3265-5.1637 3.2453 0 4.3618 2.8956 4.3618 5.1637 0 2.3032-1.1165 5.1642-4.3618 5.1642-3.2097 0-4.3265-2.861-4.3265-5.1642z"></path><path d="m111.342 25.7891v-.6979c-2.338 0-2.757-.5929-2.757-4.0829v-1.7092h1.989c3.594 0 5.583-1.884 5.583-4.2916 0-2.4778-1.989-4.3271-5.583-4.3271h-7.222v.6981c2.338 0 2.756.558 2.756 4.0477v5.5824c0 3.4897-.418 4.0826-2.756 4.0826v.6979zm-2.757-13.8526h1.989c1.954 0 2.861 1.3963 2.861 3.0711 0 1.6398-.907 3.0005-2.861 3.0005h-1.989z"></path><path d="m139.952 23.1373.175-.6279v.0003h.523l-.209 3.2794h-14.34l-3.873-4.8496h-.593v1.2558c0 2.4773.314 2.9309 2.268 2.9309v.6629h-6.944v-.6629c1.954 0 2.268-.4536 2.268-2.9309v-4.4664c0-2.4775-.314-2.8962-2.268-2.8962v-.6625h6.141c3.07 0 4.71 1.4656 4.71 3.3842 0 1.5355-1.151 2.8959-3.315 3.2802l1.605 1.7445c1.376 1.5126 2.381 2.3112 3.845 2.5348 1.541-.0814 1.807-.6523 1.807-2.9186v-4.4664c0-2.4775-.314-2.8962-2.268-2.8962v-.6625h10.259l.244 3.2796h-.558l-.175-.6626c-.314-1.1514-.698-1.5701-3.175-1.5701h-1.919v3.9075c2.722 0 2.931-.2442 2.931-2.0585h.663v5.1992h-.663c0-1.8147-.209-2.0586-2.931-2.0586v1.6049c0 2.4772.314 2.8959 2.128 2.8959h.489c2.477 0 2.861-.4187 3.175-1.5702zm-18.318-7.9203v4.6401.0003h1.431c1.57 0 2.268-1.0813 2.268-2.3027 0-1.2561-.698-2.3377-2.268-2.3377z"></path></g><path d="m147.209 26.2425c-1.396 0-2.617-.7325-3.14-1.1864-.175.1748-.489.6981-.558 1.1864h-.663v-4.8145h.697c.28 2.3027 1.884 3.6633 3.943 3.6633 1.117 0 2.024-.6278 2.024-1.6744 0-.9071-.802-1.6052-2.233-2.2681l-1.989-.942c-1.396-.6634-2.442-1.8149-2.442-3.3498 0-1.6748 1.57-3.1051 3.733-3.1051 1.152 0 2.128.4187 2.722.907.174-.1396.349-.5236.454-.9426h.662v4.1176h-.732c-.245-1.6401-1.152-3.0008-3.001-3.0008-.977 0-1.884.5583-1.884 1.4309 0 .9071.732 1.3954 2.407 2.1632l1.919.942c1.675.8024 2.338 2.094 2.338 3.1406 0 2.1978-1.919 3.7327-4.257 3.7327z"></path><path d="m157.957 26.2425c-1.395 0-2.617-.7325-3.14-1.1864-.174.1748-.488.6981-.558 1.1864h-.663v-4.8145h.698c.279 2.3027 1.884 3.6633 3.943 3.6633 1.116 0 2.023-.6278 2.023-1.6744 0-.9071-.802-1.6052-2.233-2.2681l-1.989-.942c-1.395-.6634-2.442-1.8149-2.442-3.3498 0-1.6748 1.57-3.1051 3.733-3.1051 1.152 0 2.128.4187 2.722.907.174-.1396.349-.5236.453-.9426h.663v4.1176h-.732c-.245-1.6401-1.152-3.0008-3.001-3.0008-.977 0-1.884.5583-1.884 1.4309 0 .9071.732 1.3954 2.407 2.1632l1.919.942c1.675.8024 2.338 2.094 2.338 3.1406 0 2.1978-1.919 3.7327-4.257 3.7327z"></path><path d="m2.55823 17.9996c0 6.1121 3.55202 11.3941 8.70277 13.8972l-7.36588-20.1815c-.85679 1.9205-1.33689 4.0457-1.33689 6.2843z"></path><path d="m28.4246 17.2203c0-1.9083-.6855-3.23-1.2734-4.2586-.7828-1.272-1.5164-2.3491-1.5164-3.6211 0-1.41945 1.0765-2.74077 2.5929-2.74077.0685 0 .1334.00852.2001.01234-2.7472-2.51689-6.4073-4.05358-10.4274-4.05358-5.3946 0-10.14072 2.76781-12.90177 6.96007.36229.01087.70371.01851.99371.01851 1.61514 0 4.11526-.19598 4.11526-.19598.8324-.04907.9306 1.17351.099 1.27191 0 0-.83648.0985-1.76731.1473l5.62321 16.7258 3.3792-10.1348-2.4058-6.5916c-.8315-.0488-1.6193-.1472-1.6193-.1472-.8321-.0488-.7345-1.32107.0976-1.272 0 0 2.5501.19598 4.0674.19598 1.6148 0 4.1153-.19598 4.1153-.19598.8329-.04907.9308 1.1735.099 1.272 0 0-.8383.0984-1.7674.1472l5.5803 16.5992 1.5402-5.1469c.6676-2.1358 1.1756-3.6699 1.1756-4.9918z"></path><path d="m18.2711 19.3503-4.633 13.4626c1.3833.4067 2.8462.6291 4.362.6291 1.7982 0 3.5227-.3109 5.1278-.8753-.0414-.0661-.079-.1363-.1099-.2127z"></path><path d="m31.5494 10.5912c.0664.4919.104 1.0199.104 1.5879 0 1.5669-.2926 3.3284-1.1741 5.5309l-4.7167 13.6372c4.5907-2.6771 7.6784-7.6506 7.6784-13.3472.0003-2.6847-.6855-5.2092-1.8916-7.4088z"></path><path clipRule="evenodd" d="m0 17.9996c0-9.92507 8.07512-17.9996 18.0001-17.9996 9.9248 0 18.0008 8.07453 18.0011 17.9996 0 9.9262-8.0763 18.0004-18.0011 18.0004-9.92498 0-18.0001-8.0742-18.0001-18.0004zm.82518-.0001c0 9.4705 7.7049 17.1754 17.17482 17.1754 9.4696 0 17.1739-7.7049 17.1739-17.1754 0-9.46988-7.7043-17.1742-17.1739-17.1742-9.47021 0-17.17482 7.70432-17.17482 17.1742z" fillRule="evenodd"></path></g></svg>
      <svg data-v-2cc27dd5="" fill="none" height="35" viewBox="0 0 137 35" width="137" xmlns="http://www.w3.org/2000/svg" title="litespeed" className="mr-25 ml-25 mr-35-xl ml-35-xl"><g fill="#b6bdd3"><path clipRule="evenodd" d="m81.027 14.9362c2.9684 1.4848 4.5027 3.2569 4.5697 5.254-.2587 3.3451-2.4977 5.2663-6.5532 5.2668-1.2839-.062-2.5536-.3285-3.7766-.7914.2752-.9276.48-1.892.6087-2.8685h.0357c.4774 1.7971 1.735 2.7434 3.7452 2.8133 2.032-.0729 3.135-1.0424 3.2814-2.8933 0-1.3169-1.1682-2.5182-3.4748-3.5662-2.7591-1.2824-4.1575-3.0546-4.1575-5.2614.1267-3.27534 1.974-4.96225 5.6361-5.15598 1.4555.06138 2.7275.41201 3.7824 1.04034-.1173.30178-.2573.66711-.4226 1.10257-.1355.41117-.24.73807-.3148.99377-.7152-1.45366-1.7712-2.18907-3.144-2.18907-2.0173.07268-3.0832 1.07194-3.0832 2.89197 0 1.1284 1.0676 2.2298 3.2675 3.3631zm-45.9491-6.68872v15.37972c0 .1441.1119.2665.2547.2791.8104.0672 1.7107.0672 2.6566 0 .772-.0598 1.7139-.1701 2.877-.3384-.0424.235-.0633.4889-.0633.7631 0 .2333.0239.517.0692.8241h-9.1533v-16.90458c.1744.01531.3993.0429.6775.08082.4062.06964.823.07134 1.0715.00498l.8234-.00364c.3133-.04278.5725-.07256.7867-.0852zm10.972.841c-.4883.06818-.8136.06952-1.0481.00365h-.8234c-.291-.03974-.5132-.06514-.6804-.08131v16.14418h3.1866v-16.14782c-.1834.01409-.3921.04059-.6347.0813zm3.2025.5891c0-.22395-.0154-.453-.0462-.68205h11.9817c-.0452.22909-.0471.46074-.0073.68886-.0379.28597-.0379.54171-.0013.76481-.3609-.0136-.7069-.0434-1.0331-.0904-1.2892-.1274-2.3002-.1924-3.0067-.1924-.1544 0-.28.1251-.28.279v14.7097h-3.0912v-14.7097c0-.1538-.1251-.279-.2805-.279-.9709 0-2.237.0975-3.7449.2882h-.5322c.0271-.2223.0417-.48242.0417-.77702zm14.4713-.68218v16.1597h8.73c-.0426-.2911-.0652-.5571-.0652-.777 0-.2515.0195-.4871.0546-.7028-.5942.0904-1.2561.1626-1.9662.2112-.8258.0665-1.9633.0987-3.3828.0987-.1542 0-.2792-.1257-.2792-.2807v-6.2455c0-.1536.125-.2792.2792-.2792h2.3361c.7269.0425 1.3204.0852 1.906.1274h.0001l.1246.009.4624.0321-.0023-.0104-.0001-.0005c-.0129-.059-.0273-.1249-.0432-.1945l-.0085-1.124c0-.0316.0045-.0623.0154-.0894.006-.0217.0127-.0443.0195-.065-.8228.102-1.5749.1449-2.4737.1449h-2.3362c-.1542 0-.2792-.1256-.2792-.2796v-5.2844c0-.1539.125-.279.2792-.279 1.7231 0 3.5327.1121 5.3817.3342-.0582-.2548-.0874-.4996-.0874-.72725 0-.2709.0291-.53208.0884-.77795zm27.212 8.8689c-.0484.0033-.1189.0157-.1776.0735-.051.0511-.0808.1205-.0808.1918v7.0254h-3.2081v-16.16228h5.7793c3.3091 0 4.9488 1.26478 5.0098 3.86358.024 1.4143-.3651 2.54-1.1547 3.3442-1.0872 1.1077-2.99 1.6692-5.6556 1.6692-.164 0-.3274-.0025-.5123-.0054zm.3624-.787c-.1347 0-.2678-.0096-.3912-.0276-.132-.018-.2295-.131-.2295-.2633v-6.8125c0-.1473.1207-.26786.2682-.26786h1.5338c1.575.21183 2.4334 1.42606 2.5694 3.60886-.136 1.9362-.9446 3.1202-2.4005 3.5367-.5011.1495-.956.2257-1.3502.2257zm19.7929-8.08445v16.16215h8.745c-.042-.2937-.064-.5643-.064-.7895 0-.2561.018-.4966.056-.7153-.601.0922-1.267.1659-1.979.2147-.833.0655-1.936.0968-3.376.0968-.148 0-.268-.1206-.268-.2662v-6.2382c0-.1465.12-.267.268-.267h2.59c.973.0587 1.859.1143 2.67.1698l-.008-.0355c-.012-.0571-.026-.1196-.043-.1868l-.008-1.1189c0-.0306.004-.0596.015-.0853.009-.0284.018-.0565.027-.0818-.81.0958-1.701.1455-2.653.1455h-2.59c-.148 0-.268-.1202-.268-.2665v-5.2776c0-.1473.12-.267.268-.267 1.727 0 3.539.1139 5.389.3367-.061-.2607-.09-.5092-.09-.74044 0-.27783.029-.5412.093-.78961zm10.991 16.16235h5.325c5.501-.3113 8.449-3.1968 8.76-8.5761-.251-4.7865-2.619-7.27323-7.236-7.58764l-6.849.00133zm10.493-8.5612c0-4.4423-1.996-6.69686-5.927-6.69686h-1.188c-.146 0-.267.12106-.267.26836v13.8179c0 .1459.121.2671.267.2671h1.049c2.011 0 3.544-.6566 4.559-1.948.999-1.2748 1.507-3.1949 1.507-5.7085zm-32.526 8.561v-16.16215h8.769c-.059.24841-.091.51178-.091.78961 0 .23124.03.47974.09.74044-1.85-.2228-3.663-.3367-5.39-.3367-.146 0-.267.1197-.267.267v5.2776c0 .1463.121.2665.267.2665h2.592c.954 0 1.844-.0497 2.65-.1455-.007.0253-.016.0534-.024.0818-.01.0257-.015.0547-.015.0853l.009 1.1189c.019.0814.036.1559.05.2223-.812-.0555-1.696-.1111-2.67-.1698h-2.592c-.146 0-.267.1205-.267.267v6.2382c0 .1456.121.2662.267.2662 1.441 0 2.546-.0313 3.378-.0968.711-.0488 1.375-.1225 1.979-.2147-.038.2187-.057.4592-.057.7153 0 .2252.024.4958.065.7895z" fillRule="evenodd"></path><path d="m26.4662 16.8242-7.9694-7.96806-3.3942 4.30856 3.6596 3.6594c.3376.338.3376.89 0 1.2278l-1.0585 1.0581s.7138 1.0684.7466 1.1327c.1646.3303.2045 1.1059-.263 1.4597l-8.32356 6.3904c-.00194 2.1444-.00486 6.5536-.00146 6.5556.00146.0005 16.60412-16.5967 16.60412-16.5967.3374-.3379.3374-.8895-.0002-1.2275z"></path><path d="m7.95646 17.8269c-.33641-.3361-.33641-.8877 0-1.2258l1.05991-1.0599-.72459-1.0412c-.34553-.4893-.23675-1.185.23967-1.5492l8.32515-6.39081.0057-6.55148253-.0047-.00267377-.0043-.0058337-16.59999 16.6011c-.3378681.3381-.3378681.8897.000729 1.2274l7.967731 7.9682 3.39513-4.3085z"></path><path clipRule="evenodd" d="m20.5967 4.05112c.1825-.14256.3148-.20053.4555-.20053.1693 0 .3318.10269.4071.25473.1349.27822-.0613.52824-.1578.65118l-.0025.00317-7.2946 9.25903c-.0657.0828-.0714.2691-.011.3548 0 0 3.9368 5.7108 4.0723 5.9053.192.2768.1906 1.0104-.215 1.3176l-11.72876 9.0041c-.16455.1262-.29533.2012-.47812.2027-.15787-.0105-.31526-.1141-.38393-.2525-.1366-.2774.06345-.536.1597-.66l7.29221-9.2544c.0666-.0892.0742-.2666.0143-.3575l-4.07075-5.854c-.30493-.4337-.21074-1.0462.21062-1.3685zm.836.06825c-.0703-.14207-.2229-.23772-.3798-.23772-.1338 0-.2605.05627-.4368.19433l-11.73087 9.00532c-.40775.3118-.49939.9071-.2043 1.3268l4.07087 5.8541c.0673.1019.0599.2929-.0149.393l-7.2927 9.2549c-.09237.1189-.28488.3668-.15641.6278.06404.1288.21159.2258.35877.2356.17088-.0016.29302-.0702.4577-.1965l11.72864-9.0041c.382-.2895.4001-1.0002.2084-1.2762-.1302-.1867-3.8137-5.5303-4.0597-5.887l-.0125-.0183c-.0681-.0965-.0619-.2975.0121-.3908l7.2947-9.25897v-.00003c.1006-.12823.2834-.36107.1568-.62223z" fillRule="evenodd"></path><path d="m17.6447 20.3867c.0946.1431.1798.6852-.0581.8643l-11.73031 9.0053c-.09881.0756-.16201.1122-.1902.1099-.04048.0023-.01119-.0696.09649-.2085l7.29162-9.2523c.1845-.2387.1969-.63.0276-.8735l-4.07033-5.8578c0 .0002 8.53903 6.0688 8.63323 6.2126z"></path><path d="m17.6447 20.3865-4.0084-5.7659c-.1702-.2444-.1566-.6366.0256-.8692l7.2929-9.25805c.1084-.13794.1364-.20685.0974-.20685-.0289 0-.0932.03379-.1902.11084l-11.73068 9.00416c-.23541.1811-.29108.5297-.11983.7726z"></path></g></svg>
      <svg data-v-2cc27dd5="" fill="none" height="24" viewBox="0 0 219 24" width="219" xmlns="http://www.w3.org/2000/svg" title="cloudflare" className="mr-25 ml-25 mr-35-xl ml-35-xl"><g fill="#b6bdd3"><path clipRule="evenodd" d="m216.277 10.3833c0 .7659.595 1.3616 1.361 1.3616.681 0 1.277-.5957 1.362-1.3616 0-.76592-.596-1.36163-1.362-1.36163s-1.361.59571-1.361 1.36163zm.255.0851c0-.59573.511-1.10634 1.107-1.10634.595 0 1.021.42551 1.106 1.10634 0 .5957-.511 1.1063-1.106 1.1063-.596 0-1.107-.5106-1.107-1.1063zm1.787.6808h-.34l-.255-.5106h-.426v.5106h-.255v-1.44669h.681c.34 0 .51.17021.51.51059 0 .1702-.085.4255-.34.4255zm-.34-1.0212c0 .1702-.17.2553-.255.2553v-.0851h-.426v-.42548h.426c.17 0 .255.0851.255.25528z" fillRule="evenodd"></path><path d="m76.1055 8.70715h3.4891v9.44625h6.0423v3.0637h-9.5314z"></path><path clipRule="evenodd" d="m95.9341 8.45178c-3.8296 0-6.723 2.89342-6.723 6.55282 0 3.5743 2.8083 6.3826 6.723 6.3826 3.8296 0 6.7229-2.8934 6.7229-6.4677s-2.8933-6.46772-6.7229-6.46772zm-.0853 3.14872c1.9574 0 3.2339 1.5319 3.2339 3.4041 0 1.7871-1.2765 3.319-3.2339 3.319-1.8722 0-3.1487-1.617-3.1487-3.4041s1.2765-3.319 3.1487-3.319z" fillRule="evenodd"></path><path d="m106.827 15.6855v-6.97833h3.489v6.89323c0 1.7871.936 2.6382 2.298 2.6382s2.298-.8511 2.298-2.5531v-7.06343h3.489v6.89323c0 3.9998-2.298 5.7869-5.872 5.7869-3.489.0851-5.702-1.702-5.702-5.6167z"></path><path clipRule="evenodd" d="m128.613 8.70715h-4.851v12.42485h4.766c4.51 0 7.148-2.7232 7.148-6.2975s-2.638-6.12735-7.063-6.12735zm3.404 6.29745c0 2.0424-1.361 3.1488-3.404 3.1488v.0851h-1.446v-6.3827h1.446c2.043 0 3.404 1.1915 3.404 3.1488z" fillRule="evenodd"></path><path d="m140.612 8.70715h9.957v3.06365h-6.467v2.0425h5.872v2.8934h-5.872v4.5104h-3.49z"></path><path d="m155.42 8.70715h3.489v9.44625h6.043v3.0637h-9.532z"></path><path clipRule="evenodd" d="m177.291 8.62207h-3.319l-5.361 12.59503h3.574l.851-2.2126h4.851l.936 2.2126h3.745zm-1.702 4.08493 1.362 3.5742h-2.808z" fillRule="evenodd"></path><path clipRule="evenodd" d="m192.95 8.70715h-5.872-.085v12.42485h3.489v-3.7445h1.532l2.553 3.7445h4l-2.979-4.3402c1.532-.6808 2.553-1.9573 2.553-3.8296 0-1.1914-.34-2.2126-1.106-2.8934-.851-.85104-2.213-1.36165-4.085-1.36165zm1.702 4.51025c0 .851-.681 1.4467-1.872 1.4467v.0852h-2.298v-2.9786h2.298c1.191 0 1.872.4255 1.872 1.4467z" fillRule="evenodd"></path><path d="m203.077 8.70715h10.042v2.97855h-6.553v1.8723h5.957v2.7232h-5.957v1.9573h6.638v2.9786h-10.127z"></path><path d="m68.5314 16.4513c-.5106 1.1064-1.5318 1.8723-2.8935 1.8723-1.8722 0-3.1487-1.5318-3.1487-3.4041 0-1.7871 1.2765-3.319 3.1487-3.319 1.4468 0 2.468.8511 2.9786 2.0425h3.6594c-.5957-2.9786-3.2339-5.19122-6.5529-5.19122-3.8295 0-6.723 2.89342-6.723 6.46772s2.8084 6.4677 6.723 6.4677c3.319 0 5.8721-2.1275 6.5529-5.021h-3.7445z"></path><path d="m36.4226 22.6379c.2971-1.1289.1783-2.139-.3565-2.9114-.4753-.713-1.3071-1.129-2.3172-1.129l-19.1323-.2376c-.1188 0-.2377-.0595-.2971-.1783s-.0594-.2377-.0594-.3565c.0594-.1782.2377-.3565.4159-.3565l19.3105-.2377c2.3173-.1188 4.7534-1.9607 5.6447-4.2186l1.1289-2.852c.0594-.1188.0594-.23765.0594-.35649-1.2478-5.64462-6.2388-9.80381-12.2399-9.80381-5.5258 0-10.2197 3.56502-11.8834 8.49664-1.0695-.83184-2.4955-1.24776-3.981-1.06951-2.6737.23767-4.75332 2.37668-5.0504 5.05047-.05942.713 0 1.3666.11883 1.9607-4.33744.1189-7.78363 3.6839-7.78363 8.0213 0 .416.059417.7725.059417 1.1884 0 .1782.178251.2971.356502.2971h35.293681c.1783 0 .416-.1189.4754-.3565z"></path><path d="m42.4832 10.3386c-.1782 0-.3565 0-.5348 0-.1188 0-.2376.1188-.297.2376l-.7725 2.6144c-.297 1.1289-.1782 2.139.3565 2.9114.4754.713 1.3072 1.1289 2.3173 1.1289l4.0998.2377c.1188 0 .2377.0594.2971.1783.0594.1188.0594.2376.0594.3565-.0594.1782-.2377.3565-.4159.3565l-4.2186.2376c-2.3173.1189-4.7534 1.9608-5.6447 4.2186l-.297.7725c-.0595.1188.0594.297.2376.297h14.5572c.1782 0 .3565-.1188.3565-.297.2377-.8913.4159-1.842.4159-2.8521-.0594-5.704-4.7533-10.3979-10.5168-10.3979z"></path></g></svg>
    </div>

    <div className={styles.pricingTable}> 
      <div className={styles.container}>
        <h1>All-In-One Web Hosting</h1>
        <p>We prepared the best web hosting plan for you to start. You will be able to adjust plans as you go - our custom-built algorithm will provide suggestions based on your usage.</p>
        <div className={styles.table}>
          <div className={styles.tableheader}>Best Web Hosting</div>
          <div className={styles.tabledata}>
            <div className={styles.data}>
              <p><b>Unmetered</b> traffic (Unlimited GB) </p>
              <p><b>100</b> Websites</p>
              <p><b>100 GB</b> SSD Storage</p>
              <p><b>Free</b> Weekly Backups</p>
            </div>
            <div className={styles.data} name="center">
              <h1><sup>₹</sup>149.00<span>/mo</span><br /><span style={{ fontSize: '1.5rem' }}>₹249.00/mo when you renew</span></h1>
              <div className={styles.button} style={{ margin: '1rem 0', backgroundColor: '#673de6', boxShadow: 'none' }}>
                Select
              </div>
            </div>
            <div className={styles.data}>
              <p><b>Unlimited</b> Free SSL </p>
              <p><b>Free</b> Domain</p>
              <p><b>Free</b> Email</p>
              <p><b>Optimized</b> for WordPress</p>
            </div>
          </div>
          {morePlans && <h1>Plans</h1>}
          {morePlans &&<div className={styles.tabledata}>
                <div className={styles.data}>
                  <p><b>Plan</b> Features</p>
                  <p><b>100</b> Parked domains</p>
                  <p><b>100</b> Subdomains per account</p>
                  <p><b>Full</b> DNS Editor</p>
                  <p><b>Managed</b> WordPress</p>
                  <p><b>WordPress</b> acceleration</p>
                  <p><b>WordPress</b> multisite</p>
                  <p><b>WP-CLI</b></p>
                  <p><b>1-click</b> autoinstaller</p>
                  <p><b>1</b> GB email storage</p>
                  <p><b>100</b> email mailboxes</p>
                  <p><b>50</b> email aliases</p>
                  <p><b>5</b> Forwarders</p>
                  <p><b>Enterprise</b> Virus scanner</p>
                  <p><b>Enterprise</b> SPAM filter</p>
                  <p><b>WebMail</b> Access</p>
                  <p><b>Custom</b> Email Filters</p>
                  <p><b>IMAP</b>/SMTP</p>
                  <p><b>Special</b> offers for Fiverr services</p>
                  <p><b>FAQ</b> Database</p>
                </div>
                <div className={styles.data} style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }} name="center">
                  <p><b>40</b> Active Processes</p>
                  <p><b>20</b> Entry Processes</p>
                  <p><b>400</b> 000 Inodes</p>
                  <p><b>Unlimited</b> Cronjobs</p>
                  <p><b>Auto</b> Script Installer</p>
                  <p><b>Usage</b> Monitoring and Statistics</p>
                  <p><b>Automated</b> Scaling suggestions</p>
                  <p><b>GIT</b> support</p>
                  <p><b>SSH</b> Access</p>
                  <p><b>Access</b> Management</p>
                  <p><b>99.9%</b> Uptime Guarantee</p>
                  <p><b>Unlimited</b> FTP accounts</p>
                  <p><b>20</b> minutes average issue resolution time</p>
                  <p><b>24/7/365</b> chat and email service</p>
                  <p><b>Knowledge</b> Base</p>
                  <p><b>Tutorials</b></p>
                  <p><b>Webinars</b></p>
                </div>
                <div className={styles.data}>
                  <p><b>Unlimited</b> databases</p>
                  <p><b>3 GB</b> database size</p>
                  <p><b>Unlimited</b> MySQL backup size</p>
                  <p><b>500 MySQL</b> connections</p>
                  <p><b>200 MB</b> MySQL import size</p>
                  <p><b>16 MB</b> MySQL packet size</p>
                  <p><b>300 seconds MySQL</b> statement time</p>
                  <p><b>15 MySQL</b> user connections</p>
                  <p><b>60 seconds MySQL</b> query time</p>
                  <p><b>HTTP/3</b></p>
                  <p><b>IPv6</b></p>
                  <p><b>10</b> MB/s I/O</p>
                  <p><b>128</b> IOPS</p>
                  <p><b>1</b> CPU Core</p>
                  <p><b>1 GB</b> RAM</p>
                  <p><b>6</b> datacenter locations</p>
                  <p><b>Dynamic</b> PHP limits</p>
                </div>
                </div>}
          <div className={styles.tablefooter} onClick={() => setMorePlans(!morePlans)}>
            See All Features
          </div>
        </div>
      </div>
    </div>

    <div className={styles.serviceSection}>
      <div className={styles.serviceContainer}>
        <h1>Our services include</h1>
        <div style={{ zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className={styles.serviceData}>
            <Service title="Free SSL" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores cum nisi perspiciatis." />
            <Service title="Access Management" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores cum nisi perspiciatis." />
            <Service title="eCommerce Optimization" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores cum nisi perspiciatis." />
            <Service title="Free Migration" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores cum nisi perspiciatis." />
            <Service title="Automated backups" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores cum nisi perspiciatis." />
            <Service title="DDoS Protection" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores cum nisi perspiciatis." />
            {seeMore && <Service title="PHP Speed Boost" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores cum nisi perspiciatis." />}
            {seeMore && <Service title="LiteSpeed Cache Plugin" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores cum nisi perspiciatis." />}
            {seeMore && <Service title="One-Click WordPress Installation" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores cum nisi perspiciatis." />}
            {seeMore && <Service title="24/7/365 Tech Support" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores cum nisi perspiciatis." />}
            {seeMore && <Service title="Auto Script Installer" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores cum nisi perspiciatis." />}
            {seeMore && <Service title="99.9% Uptime Guarantee" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores cum nisi perspiciatis." />}
          </div>
          <div className={styles.button} onClick={() => setSeeMore(!seeMore)} style={{ zIndex: 2 }}>{seeMore ? "See less" : 'See all Services'}</div>
        </div>
      </div>
    </div>

    <div className={styles.domainSection}>
      <h1>Find the perfect domain name</h1>
      <p>Enter domain name of your choice and pick any extension name on the next step (choose between .in, .com, .online, .live, .store, .info and many more)</p>
      <div className={styles.inputDiv}>
        <input type="text" placeholder="Type in that perfect domain name" maxLength={40}/>
        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#5F6368"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></span>
      </div>
    </div>

    <div className={styles.testimonials}>
      {reviews.map((e) => {
        return <div key={e.id} className={`${styles.reviewContainer} ${currReview === e.id ? styles.activeReview : ''}`}>
          <div className={styles.reviewHeader}>
            <h1>{e.title}</h1>
            <div className={styles.btns}>
              <span onClick={() => {
                if (currReview > 0) {
                  setCurrReview(currReview - 1)
                } else {
                  setCurrReview(reviews.length - 1)
                }
              }}><svg width="30" height="30" viewBox="0 0 20 20" className=""><path d="M7.65 4.15c.2-.2.5-.2.7 0l5.49 5.46c.21.22.21.57 0 .78l-5.49 5.46a.5.5 0 01-.7-.7L12.8 10 7.65 4.85a.5.5 0 010-.7z"></path></svg></span>
              <span onClick={() => {
                if (currReview < reviews.length - 1) {
                  setCurrReview(currReview + 1)
                } else {
                  setCurrReview(0)
                }
              }}><svg width="30" height="30" viewBox="0 0 20 20" className=""><path d="M7.65 4.15c.2-.2.5-.2.7 0l5.49 5.46c.21.22.21.57 0 .78l-5.49 5.46a.5.5 0 01-.7-.7L12.8 10 7.65 4.85a.5.5 0 010-.7z"></path></svg></span>
            </div>
          </div>
          <div className={styles.review}>
            {e.desc}
          </div>
          <div className={styles.reviewFooter}>
            <span>Recommended By</span><br />
            <span>{e.name}</span>
          </div>
        </div>
      })}
    </div>
  </>
}


