import React from 'react'
import styles from './styles.module.scss'

interface IconProps {
    type: number
}

const Icons = ({ type }: IconProps) => {

    switch (type) {
        case 1:
            return (
                <svg className={styles.svgSize} xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52">
                    <g transform="translate(-86 -64)">
                        <rect className={styles.white} width="52" height="52" transform="translate(86 64)" />
                        <rect className={styles.black} width="11" height="11" rx="4" transform="translate(99 79)" />
                        <rect className={styles.black} width="11" height="11" rx="4" transform="translate(99 94)" />
                        <rect className={styles.black} width="11" height="11" rx="4" transform="translate(114 79)" />
                        <rect className={styles.black} width="11" height="11" rx="4" transform="translate(114 94)" />
                    </g>
                </svg>
            )
        case 2:
            return (
                <svg className={styles.svgSize} xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52">
                    <g transform="translate(-86 -164)">
                        <rect className={styles.white} width="52" height="52" transform="translate(86 164)" />
                        <g className={`${styles.white} ${styles.strokeWidth1}`} transform="translate(103 187)">
                            <rect className={styles.strokeNone} width="18" height="16" rx="5" />
                            <rect className={styles.fillNone} x="1" y="1" width="16" height="14" rx="4" />
                        </g>
                        <line className={`${styles.fillNone} ${styles.strokeWidth1}`} y1="13" transform="translate(123.5 187)" />
                        <g className={styles.white} transform="translate(95 179)">
                            <path className={styles.strokeNone} d="M 16.9999885559082 14.68441963195801 C 16.70751762390137 14.68441963195801 16.41303825378418 14.61859035491943 16.14839744567871 14.49405956268311 L 6.194017887115479 9.809639930725098 C 5.474917888641357 9.471240043640137 5.045608043670654 8.794739723205566 5.045608043670654 8 C 5.045608043670654 7.205259799957275 5.474917888641357 6.528759956359863 6.194017887115479 6.190360069274902 L 16.14840888977051 1.505949974060059 C 16.41304779052734 1.381410002708435 16.70751762390137 1.315580010414124 16.99999809265137 1.315580010414124 C 17.29247856140137 1.315580010414124 17.58694839477539 1.381410002708435 17.85158729553223 1.505949974060059 L 27.80597877502441 6.190360069274902 C 28.52507781982422 6.528759956359863 28.95438766479492 7.205259799957275 28.95438766479492 8 C 28.95438766479492 8.794739723205566 28.52507781982422 9.471240043640137 27.80597877502441 9.809639930725098 L 17.85158729553223 14.49405002593994 C 17.58694839477539 14.61859035491943 17.2924690246582 14.68441963195801 16.9999885559082 14.68441963195801 Z" />
                            <path className={styles.black} d="M 17 2.315580368041992 C 16.85168075561523 2.315580368041992 16.70842933654785 2.347599983215332 16.57419967651367 2.410770416259766 L 6.619819641113281 7.095170021057129 C 6.101560592651367 7.339059829711914 6.045610427856445 7.809189796447754 6.045610427856445 8 C 6.045610427856445 8.190810203552246 6.101560592651367 8.660940170288086 6.619810104370117 8.904819488525391 L 16.57419967651367 13.58922958374023 C 16.70841979980469 13.65238952636719 16.85168075561523 13.68441963195801 17 13.68441963195801 C 17.14831924438477 13.68441963195801 17.29158020019531 13.65238952636719 17.42580032348633 13.58922958374023 L 27.38018035888672 8.904829978942871 C 27.89843940734863 8.660940170288086 27.95438957214355 8.190810203552246 27.95438957214355 8 C 27.95438957214355 7.809189796447754 27.89843940734863 7.339059829711914 27.38018989562988 7.095179557800293 L 17.4257698059082 2.410750389099121 C 17.29157066345215 2.347599983215332 17.14831924438477 2.315580368041992 17 2.315580368041992 M 17 0.315582275390625 C 17.43643569946289 0.315582275390625 17.87286949157715 0.4107646942138672 18.27738952636719 0.6011295318603516 L 28.23178100585938 5.285539627075195 C 30.52858924865723 6.366399765014648 30.52858924865723 9.633600234985352 28.23178100585938 10.7144603729248 L 18.27738952636719 15.39887046813965 C 17.46834945678711 15.77960014343262 16.53165054321289 15.77960014343262 15.72261047363281 15.39887046813965 L 5.768220901489258 10.7144603729248 C 3.471410751342773 9.633600234985352 3.471410751342773 6.366399765014648 5.768220901489258 5.285539627075195 L 15.72261047363281 0.6011295318603516 C 16.12713050842285 0.4107646942138672 16.56356430053711 0.315582275390625 17 0.315582275390625 Z" />
                        </g>
                    </g>
                </svg>
            )
        case 3:
            return (
                <svg className={styles.svgSize} xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52">
                    <g transform="translate(-86 -265)">
                        <rect className={styles.white} width="52" height="52" transform="translate(86 265)" />
                        <g transform="translate(-46 -2)">
                            <g className={`${styles.white} ${styles.strokeWidth1}`} transform="translate(147 279)">
                                <rect className={styles.strokeNone} width="21" height="25" rx="4" />
                                <rect className={styles.fillNone} x="1" y="1" width="19" height="23" rx="3" />
                            </g>
                            <line className={`${styles.strokeWidth1} ${styles.fillNone} ${styles.strokeLinecap}`} y2="4.604" transform="translate(163.5 300.896)" />
                            <line className={`${styles.strokeWidth1} ${styles.fillNone} ${styles.strokeLinecap}`} y2="4.604" transform="translate(165.5 300.896)" />
                            <line className={`${styles.strokeWidth1} ${styles.fillNone} ${styles.strokeLinecap}`} x2="11" transform="translate(151.5 284.5)" />
                            <line className={`${styles.strokeWidth1} ${styles.fillNone} ${styles.strokeLinecap}`} x2="11" transform="translate(151.5 288.5)" />
                            <line className={`${styles.strokeWidth1} ${styles.fillNone} ${styles.strokeLinecap}`} x2="5" transform="translate(151.5 292.5)" />
                            <path className={styles.white} d="M0,0,2.611-.189V5H0Z" transform="translate(160 302)" />
                            <g className={`${styles.white} ${styles.strokeWidth1}`} transform="translate(159 293)">
                                <circle className={styles.strokeNone} cx="5" cy="5" r="5" />
                                <circle className={styles.fillNone} cx="5" cy="5" r="4" />
                            </g>
                        </g>
                    </g>
                </svg>
            )
        case 4:
            return (
                <svg className={styles.svgSize} xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52">
                    <g transform="translate(-86 -363)">
                        <rect className={styles.white} width="52" height="52" transform="translate(86 363)" />
                        <line className={`${styles.fillNone} ${styles.strokeLinecap} ${styles.strokeWidth1}`} y1="9" transform="translate(106.5 388.5)" />
                        <line className={`${styles.fillNone} ${styles.strokeLinecap} ${styles.strokeWidth1}`} y1="14.67" transform="translate(110.5 382.83)" />
                        <line className={`${styles.fillNone} ${styles.strokeLinecap} ${styles.strokeWidth1}`} y1="9" transform="translate(115.5 388.5)" />
                        <line className={`${styles.fillNone} ${styles.strokeLinecap} ${styles.strokeWidth1}`} y1="14.67" transform="translate(120.5 382.83)" />
                        <path className={`${styles.fillNone} ${styles.strokeLinecap} ${styles.strokeWidth1}`} d="M27,0H.85V-25.9" transform="translate(98.5 401.5)" />
                    </g>
                </svg>
            )
        case 5:
            return (
                <svg className={styles.svgSize} xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52">
                    <g transform="translate(-86 -462)">
                        <rect className={styles.white} width="52" height="52" transform="translate(86 462)" />
                        <g className={`${styles.white} ${styles.strokeWidth1}`} transform="translate(98 479)">
                            <rect className={styles.strokeNone} width="28" height="18" rx="5" />
                            <rect className={styles.fillNone} x="1" y="1" width="26" height="16" rx="4" />
                        </g>
                        <g className={`${styles.white} ${styles.strokeWidth1}`} transform="translate(107 483)">
                            <circle className={styles.strokeNone} cx="5" cy="5" r="5" />
                            <circle className={styles.fillNone} cx="5" cy="5" r="4" />
                        </g>
                        <circle className={styles.black} cx="1" cy="1" r="1" transform="translate(103 483)" />
                        <circle className={styles.black} cx="1" cy="1" r="1" transform="translate(119 483)" />
                        <circle className={styles.black} cx="1" cy="1" r="1" transform="translate(103 491)" />
                        <circle className={styles.black} cx="1" cy="1" r="1" transform="translate(119 491)" />
                    </g>
                </svg>
            )
        case 6:
            return (
                <svg className={styles.svgSize} xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52">
                    <g transform="translate(-86 -561)">
                        <rect className={styles.white} width="52" height="52" transform="translate(86 561)" />
                        <g className={`${styles.strokeWidth1} ${styles.white}`} transform="translate(97 573)">
                            <circle className={styles.strokeNone} cx="14" cy="14" r="14" />
                            <circle className={styles.fillNone} cx="14" cy="14" r="13" />
                        </g>
                        <text className={`${styles.fs20} ${styles.black}`} transform="translate(106 594)">
                            <tspan x="0" y="0">
                                ?</tspan>
                        </text>
                    </g>
                </svg>
            )
        case 7:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 88 88">
                    <g transform="translate(-719 -246)">
                        <rect className={styles.white} width="88" height="88" transform="translate(719 246)" />
                        <path className={styles.ticketColor} d="M30.783,49.073a10.192,10.192,0,0,1-5.7-1.621,10.173,10.173,0,0,1-2.705-2.934c-.722-1.073-1.244-1.847-2.481-1.847-1.222,0-1.68.758-2.314,1.807A9.008,9.008,0,0,1,15,47.453a10.2,10.2,0,0,1-5.747,1.621A10.012,10.012,0,0,1,8,49a6.007,6.007,0,0,1-6-6V35h8a2,2,0,1,0,0-4H2V9a9.01,9.01,0,0,1,9-9c.007,0,.066,0,.168,0a7.725,7.725,0,0,1,4.177,1.362,6.844,6.844,0,0,1,2,2.506C18,5.035,18.562,6.043,19.9,6.043s1.874-.993,2.513-2.143a6.711,6.711,0,0,1,2.038-2.537A8.239,8.239,0,0,1,28.82,0C28.933,0,29,0,29,0a9.01,9.01,0,0,1,9,9V31H30a2,2,0,1,0,0,4h8v8a6.007,6.007,0,0,1-6,6A9.361,9.361,0,0,1,30.783,49.073ZM18,31a2,2,0,0,0,0,4h4a2,2,0,0,0,0-4Z" transform="translate(743 265)" />
                    </g>
                </svg>
            )
        default:
            return null;
    }

}
export default Icons