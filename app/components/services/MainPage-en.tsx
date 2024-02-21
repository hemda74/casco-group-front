import Link from 'next/link';
import React from 'react';

const MainPageEn = () => {
  return (
    <>
      <div className="top-nav">
        <div className="container-fluid">
          <div className="row align-content-end align-items-end">
            <div className="col-md-3">
              <a href="https://www.argonandco.com/en/" />
              <div className="logo logo--white">
                <defs></defs>
                <title>Argon &amp; Co</title>
              </div>
              <div className="logo logo--color">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="220"
                  height="60"
                  viewBox="0 0 417 113">
                  <defs>
                    <polygon
                      id="argon-logo-colour-a"
                      points=".472 .579 45.182 .579 45.182 57 .472 57"></polygon>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <path
                      fill="#88737F"
                      d="M23.8237226,43.7948378 L-1.38555833e-13,99.9773744 L12.4677458,99.9773744 L17.5493272,87.4651793 L41.05649,87.4651793 L46.1394568,99.9773744 L58.9251478,99.9773744 L35.1007326,43.7948378 L23.8237226,43.7948378 Z M29.3029086,58.5369841 L36.6883804,76.628228 L21.9181296,76.628228 L29.3029086,58.5369841 Z"></path>
                    <g transform="translate(60.956 42.68)">
                      <path
                        fill="#88737F"
                        d="M0.168185382,14.5824768 L12.2390193,14.5824768 L12.2390193,23.1887817 C13.4567701,20.2671841 15.1240774,17.9287939 17.2423266,16.1756963 C19.3591904,14.4225988 22.2179262,13.6252939 25.8192269,13.7858671 L25.8192269,26.45655 L25.1840292,26.45655 C21.160187,26.45655 17.9966671,27.6792695 15.6934694,30.1212329 C13.3909645,32.566672 12.2390193,36.3655134 12.2390193,41.5177573 L12.2390193,57.2970256 L0.168185382,57.2970256 L0.168185382,14.5824768 Z"></path>
                      <g transform="translate(27.015 13.207)">
                        <mask id="argon-logo-colour-b" fill="#fff">
                          <use xlinkHref="#argon-logo-colour-a"></use>
                        </mask>
                        <path
                          fill="#88737F"
                          d="M22.8663543,30.5417817 C24.3480204,30.5417817 25.7250902,30.3026598 26.9961782,29.8244159 C28.2665736,29.346172 29.3644889,28.6698183 30.2920022,27.7925744 C31.2174374,26.9160256 31.9454556,25.8677817 32.476057,24.6450622 C33.0038875,23.4230378 33.2698809,22.0946598 33.2698809,20.659928 L33.2698809,20.5014402 C33.2698809,19.0660134 33.0038875,17.7397207 32.476057,16.5163061 C31.9454556,15.2942817 31.2174374,14.2453427 30.2920022,13.3680988 C29.3644889,12.49155 28.2665736,11.8151963 26.9961782,11.3369524 C25.7250902,10.8580134 24.3480204,10.6188915 22.8663543,10.6188915 C21.3839955,10.6188915 20.0200869,10.8580134 18.7767065,11.3369524 C17.5319407,11.8151963 16.4464939,12.49155 15.5210586,13.3680988 C14.5935453,14.2453427 13.8648344,15.2942817 13.3370038,16.5163061 C12.8070952,17.7397207 12.5431799,19.0660134 12.5431799,20.5014402 L12.5431799,20.659928 C12.5431799,23.6357451 13.5219523,26.0269646 15.4808826,27.8328915 C17.4391201,29.6388183 19.900944,30.5417817 22.8663543,30.5417817 M21.4373327,57.0002085 C17.9427065,57.0002085 14.6073992,56.6144159 11.4314108,55.8449159 C8.25403704,55.0747207 5.31633439,53.9715622 2.61622475,52.5375256 L6.74535598,43.4529768 C8.96889419,44.673611 11.2055935,45.6294037 13.4561467,46.32105 C15.7053145,47.0113061 18.2606517,47.3574768 21.1193875,47.3574768 C25.2485188,47.3574768 28.3067497,46.3731841 30.2920022,44.4087695 C32.2772547,42.4429646 33.2698809,39.5470866 33.2698809,35.7225256 L33.2698809,33.6503671 C31.4688842,35.8288793 29.509954,37.5291476 27.3930902,38.7504768 C25.274841,39.9725012 22.6010537,40.5828183 19.3724208,40.5828183 C16.8828892,40.5828183 14.5007248,40.1448915 12.2252347,39.2683427 C9.9483593,38.3917939 7.93678455,37.104428 6.18981777,35.4034646 C4.44215831,33.7038915 3.0526201,31.6178305 2.01981777,29.1473671 C0.988400831,26.6769037 0.471653322,23.8477573 0.471653322,20.659928 L0.471653322,20.5014402 C0.471653322,17.313611 1.00017658,14.4837695 2.05999385,12.0140012 C3.11842575,9.5435378 4.52181777,7.45886707 6.26878455,5.75790366 C8.01644402,4.05763537 10.0273261,2.76957439 12.3042015,1.89163537 C14.5803842,1.01578171 16.9362264,0.57855 19.3724208,0.57855 C22.6543909,0.57855 25.3545005,1.18886707 27.472057,2.41019634 C29.5896135,3.63291585 31.4688842,5.14758659 33.1112547,6.95281829 L33.1112547,1.37515976 L45.1820885,1.37515976 L45.1820885,34.4469768 C45.1820885,42.0453549 43.3810919,47.6487329 39.7818693,51.262672 C37.7696018,53.2813061 35.2412796,54.7410622 32.1975952,55.6454159 C29.1525254,56.5483793 25.566464,57.0002085 21.4373327,57.0002085"
                          mask="url(#argon-logo-colour-b)"></path>
                      </g>
                      <path
                        fill="#88737F"
                        d="M98.9358822 47.8139634C100.682849 47.8139634 102.231013 47.5095 103.581068 46.8977927 104.931123 46.2874756 106.082376 45.4505488 107.035518 44.3870122 107.988661 43.3241707 108.715987 42.0896341 109.220266 40.6813171 109.721774 39.2743902 109.974606 37.7722317 109.974606 36.1790122L109.974606 36.018439C109.974606 34.4252195 109.709306 32.9244512 109.18009 31.5175244 108.650181 30.1092073 107.881987 28.8607683 106.876892 27.7715122 105.871105 26.6836463 104.679676 25.8175244 103.303992 25.1807927 101.925537 24.544061 100.416856 24.2243049 98.777256 24.2243049 97.0295965 24.2243049 95.4814321 24.5308537 94.1306846 25.1411707 92.7806297 25.752878 91.6293772 26.5898049 90.6762344 27.6512561 89.7230915 28.7154878 88.9950733 29.9507195 88.4928723 31.3569512 87.9885932 32.7659634 87.737839 34.2653415 87.737839 35.8599512L87.737839 36.018439C87.737839 37.6130488 88.002447 39.1152073 88.5323556 40.521439 89.0608789 41.9297561 89.8297659 43.1788902 90.8355533 44.2667561 91.840648 45.3567073 93.0196081 46.2193537 94.369663 46.8574756 95.7190251 47.4949024 97.2408673 47.8139634 98.9358822 47.8139634M98.777256 58.254C95.4932078 58.254 92.4495234 57.6819146 89.6441248 56.5405244 86.8373407 55.398439 84.4150002 53.8302439 82.3777958 51.8380244 80.3385135 49.8465 78.7370118 47.5095 77.5732909 44.824939 76.4088772 42.1438537 75.8263241 39.2604878 75.8263241 36.1790122L75.8263241 36.018439C75.8263241 32.9397439 76.4088772 30.056378 77.5732909 27.3725122 78.7370118 24.6907317 80.35306 22.3398293 82.4172792 20.3191098 84.4821912 18.3011707 86.9163075 16.7072561 89.7230915 15.538061 92.5291829 14.3702561 95.6005749 13.7856585 98.9358822 13.7856585 102.217852 13.7856585 105.261537 14.3563537 108.068321 15.498439 110.873719 16.6412195 113.29606 18.2080244 115.33465 20.2002439 117.371161 22.1931585 118.973356 24.5308537 120.138462 27.2133293 121.304261 29.8965 121.886814 32.7791707 121.886814 35.8599512L121.886814 36.018439C121.886814 39.1006098 121.304261 41.9832805 120.138462 44.6664512 118.973356 47.3489268 117.360078 49.7005244 115.294474 51.7184634 113.230254 53.7377927 110.794753 55.3324024 107.988661 56.5002073 105.18257 57.6687073 102.111871 58.254 98.777256 58.254M125.515199 14.5824768L137.587418 14.5824768 137.587418 20.688428C138.273875 19.7792085 139.028216 18.909611 139.849054 18.0796354 140.670586 17.25105 141.58286 16.515611 142.588648 15.8726232 143.595128 15.2310256 144.706204 14.7221963 145.92534 14.3475256 147.143091 13.9728549 148.518775 13.7858671 150.054471 13.7858671 154.660867 13.7858671 158.220606 15.1927939 160.735767 18.009428 163.249543 20.824672 164.50747 24.7034524 164.50747 29.6436841L164.50747 57.2970256 152.437329 57.2970256 152.437329 33.5273305C152.437329 30.6669037 151.801438 28.5050744 150.53035 27.0487939 149.260648 25.5925134 147.459651 24.8619402 145.130131 24.8619402 142.800611 24.8619402 140.961516 25.5925134 139.611461 27.0487939 138.261407 28.5050744 137.587418 30.6669037 137.587418 33.5273305L137.587418 57.2970256 125.515199 57.2970256 125.515199 14.5824768zM189.681801 22.8696512C192.115918 21.9666878 193.955705 20.9448585 195.201163 19.802078 196.444544 18.6599927 197.06658 17.2113585 197.06658 15.458261L197.06658 15.299078C197.06658 13.7051634 196.576848 12.4435171 195.597383 11.514139 194.617225 10.5840659 193.361376 10.1183341 191.82568 10.1183341 190.184695 10.1183341 188.874124 10.6362 187.894658 11.673322 186.913808 12.7090537 186.425461 14.0777488 186.425461 15.777322L186.425461 15.9365049C186.425461 17.1592244 186.675522 18.2881024 187.179801 19.3224439 187.682695 20.3595659 188.516002 21.5419683 189.681801 22.8696512L189.681801 22.8696512zM188.410713 48.0532244C189.786398 48.0532244 191.150306 47.7737854 192.501054 47.2156024 193.851109 46.6588098 195.160987 45.8747122 196.432075 44.8653951L185.790956 34.0263585C183.935929 34.9835415 182.614275 36.0985171 181.819758 37.3740659 181.025242 38.6489195 180.629022 39.9772976 180.629022 41.3592L180.629022 41.5176878C180.629022 43.4841878 181.354962 45.0642 182.812384 46.2591146 184.267728 47.4554195 186.133838 48.0532244 188.410713 48.0532244L188.410713 48.0532244zM203.261316 51.8777854C200.983748 53.7379317 198.509456 55.2393951 195.835668 56.3814805 193.161881 57.5235659 190.210325 58.094261 186.981692 58.094261 184.333534 58.094261 181.872403 57.7223707 179.59622 56.9778951 177.317959 56.2355049 175.347946 55.1594561 173.679946 53.7504439 172.011253 52.3442122 170.702067 50.6564561 169.748232 48.6906512 168.795781 46.7248463 168.318517 44.4935049 168.318517 41.9959317L168.318517 41.8367488C168.318517 38.2777244 169.245338 35.2358707 171.098979 32.7118829 172.951235 30.1892854 175.625715 28.1289439 179.119649 26.5357244 177.741886 24.6227488 176.74926 22.7639927 176.14177 20.9573707 175.532202 19.1514439 175.22811 17.2919927 175.22811 15.3790171L175.22811 15.219139C175.22811 13.3068585 175.598007 11.473822 176.339879 9.72072439 177.080366 7.96762683 178.165813 6.41263902 179.59622 5.05854146 181.025242 3.70374878 182.784677 2.6151878 184.876604 1.79146829 186.968531.968443902 189.363163.555541463 192.063273.555541463 194.446823.555541463 196.590702.91422439 198.496987 1.63228537 200.40258 2.3489561 202.04218 3.34576098 203.420635 4.62061463 204.79632 5.89477317 205.854751 7.38372439 206.596624 9.08329756 207.337803 10.784261 207.7077 12.6166024 207.7077 14.5824073L207.7077 14.7415902C207.7077 16.6010415 207.431316 18.2881024 206.875085 19.802078 206.318854 21.3153585 205.524338 22.6583341 204.492228 23.826139 203.460811 24.9953341 202.228514 26.031761 200.799492 26.9347244 199.369778 27.8376878 197.780745 28.6356878 196.034471 29.3245537L203.420635 36.736639C204.320441 35.3019073 205.220247 33.7747244 206.120052 32.1537 207.019858 30.5340659 207.919663 28.8748098 208.820162 27.1731512L217.794667 32.114078C216.734157 34.0812732 215.596065 36.0727976 214.3797 38.0907366 213.161256 40.1114561 211.863846 42.0501512 210.487469 43.9096024L218.667457 52.1176024 209.693645 58.413322 203.261316 51.8777854zM249.638782 58.2536524C245.561602 58.2536524 241.776739 57.5084817 238.282112 56.022311 234.788871 54.5354451 231.770124 52.5036037 229.228641 49.9260915 226.688543 47.3485793 224.70329 44.3074207 223.272883 40.8005305 221.843861 37.2943354 221.129004 33.5483232 221.129004 29.5638841L221.129004 29.4047012C221.129004 25.4202622 221.843861 21.6874573 223.272883 18.208372 224.70329 14.7292866 226.688543 11.6728354 229.228641 9.04318902 231.770124 6.41284756 234.815194 4.34138415 238.362464 2.82740854 241.909043 1.31343293 245.827596.55575 250.11466.55575 252.708788.55575 255.078484.768457317 257.223056 1.19317683 259.366935 1.61859146 261.312704 2.20388415 263.05967 2.94696951 264.806637 3.69144512 266.4213 4.59440854 267.904351 5.65585976 269.386018 6.71939634 270.763087 7.88720122 272.033483 9.16275L264.251099 18.1680549C262.079513 16.2036402 259.870521 14.6611646 257.619968 13.546189 255.368722 12.4298232 252.841785 11.8716402 250.036386 11.8716402 247.705481 11.8716402 245.549827 12.3241646 243.563881 13.227128 241.578629 14.1307866 239.871146 15.3785305 238.441431 16.9724451 237.011717 18.5670549 235.900641 20.4126037 235.106817 22.511872 234.3123 24.6111402 233.915388 26.8542988 233.915388 29.2462134L233.915388 29.4047012C233.915388 31.7952256 234.3123 34.054372 235.106817 36.1786646 235.900641 38.3050427 236.998556 40.1637988 238.401255 41.7570183 239.803954 43.351628 241.498969 44.6139695 243.484222 45.5426524 245.469474 46.4727256 247.653529 46.9377622 250.036386 46.9377622 253.212375 46.9377622 255.899323 46.3531646 258.096539 45.1839695 260.29237 44.0161646 262.477117 42.4215549 264.648704 40.4022256L272.430395 48.2918598C271.001373 49.8343354 269.519014 51.2148476 267.983318 52.436872 266.448315 53.6588963 264.767154 54.7064451 262.94122 55.583689 261.113901 56.4602378 259.11618 57.1247744 256.945287 57.5759085 254.7737 58.0263476 252.338199 58.2536524 249.638782 58.2536524M296.866248 47.8139634C298.613215 47.8139634 300.162072 47.5095 301.51282 46.8977927 302.862182 46.2874756 304.014127 45.4505488 304.96727 44.3870122 305.91972 43.3241707 306.646353 42.0896341 307.151325 40.6813171 307.653526 39.2743902 307.905665 37.7722317 307.905665 36.1790122L307.905665 36.018439C307.905665 34.4252195 307.639672 32.9244512 307.111149 31.5175244 306.58124 30.1092073 305.813738 28.8607683 304.807951 27.7715122 303.802164 26.6836463 302.610735 25.8175244 301.235051 25.1807927 299.857288 24.544061 298.348607 24.2243049 296.707622 24.2243049 294.960655 24.2243049 293.411798 24.5308537 292.061743 25.1411707 290.711689 25.752878 289.560436 26.5898049 288.607986 27.6512561 287.654843 28.7154878 286.926132 29.9507195 286.424624 31.3569512 285.920345 32.7659634 285.669591 34.2653415 285.669591 35.8599512L285.669591 36.018439C285.669591 37.6130488 285.933506 39.1152073 286.462722 40.521439 286.991245 41.9297561 287.760132 43.1788902 288.766612 44.2667561 289.771707 45.3567073 290.949974 46.2193537 292.300722 46.8574756 293.649391 47.4949024 295.172619 47.8139634 296.866248 47.8139634M296.707622 58.254C293.424959 58.254 290.380582 57.6819146 287.575184 56.5405244 284.767707 55.398439 282.346059 53.8302439 280.308855 51.8380244 278.270265 49.8465 276.668071 47.5095 275.505042 44.824939 274.339243 42.1438537 273.758076 39.2604878 273.758076 36.1790122L273.758076 36.018439C273.758076 32.9397439 274.339243 30.056378 275.505042 27.3725122 276.668071 24.6907317 278.283426 22.3398293 280.348338 20.3191098 282.413943 18.3011707 284.847366 16.7072561 287.654843 15.538061 290.460242 14.3702561 293.531634 13.7856585 296.866248 13.7856585 300.148911 13.7856585 303.192596 14.3563537 306.000072 15.498439 308.804778 16.6412195 311.226426 18.2080244 313.265708 20.2002439 315.302913 22.1931585 316.905107 24.5308537 318.070213 27.2133293 319.234627 29.8965 319.817873 32.7791707 319.817873 35.8599512L319.817873 36.018439C319.817873 39.1006098 319.234627 41.9832805 318.070213 44.6664512 316.905107 47.3489268 315.291137 49.7005244 313.226225 51.7184634 311.161313 53.7377927 308.725119 55.3324024 305.91972 56.5002073 303.114321 57.6687073 300.043622 58.254 296.707622 58.254"></path>
                    </g>
                    <g fill-rule="nonzero" transform="translate(362)">
                      <polygon
                        fill="#911837"
                        points="21.854 19 21.854 0 32.506 0 32.506 19 27.174 28.187"></polygon>
                      <polygon
                        fill="#C4155D"
                        points="16.522 28.187 0 18.687 5.332 9.5 21.854 19 27.174 28.187"></polygon>
                      <polygon
                        fill="#AA1A17"
                        points="21.854 37.374 5.332 46.874 0 37.687 16.522 28.187 27.174 28.187"></polygon>
                      <polygon
                        fill="#C73D18"
                        points="32.506 37.374 32.506 56.374 21.854 56.374 21.854 37.374 27.174 28.187"></polygon>
                      <polygon
                        fill="#E84E0F"
                        points="37.827 28.187 54.36 37.687 49.029 46.874 32.506 37.374 27.174 28.187"></polygon>
                      <polygon
                        fill="#9E1A59"
                        points="32.506 19 49.029 9.5 54.36 18.687 37.827 28.187 27.174 28.187"></polygon>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div className="col-md-9 text-right">
              <button className="hamburger hamburger--collapse" type="button">
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <div className="menus">
                <div className="languages">
                  <div className="menu-languages-container">
                    <ul id="menu-languages" className="menu">
                      <li
                        id="menu-item-wpml-ls-12-en"
                        className="menu-item wpml-ls-slot-12 wpml-ls-item wpml-ls-item-en wpml-ls-current-language wpml-ls-menu-item wpml-ls-first-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item menu-item-wpml-ls-12-en">
                        <a
                          title="En"
                          href="https://www.argonandco.com/en/about/?l_switcher=true">
                          <span className="wpml-ls-native" lang="en">
                            En
                          </span>
                        </a>
                      </li>
                      <li
                        id="menu-item-wpml-ls-12-fr"
                        className="menu-item wpml-ls-slot-12 wpml-ls-item wpml-ls-item-fr wpml-ls-menu-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item menu-item-wpml-ls-12-fr">
                        <a
                          title="Fr"
                          href="https://www.argonandco.com/fr/a-propos/?l_switcher=true">
                          <span className="wpml-ls-native" lang="fr">
                            Fr
                          </span>
                        </a>
                      </li>
                      <li
                        id="menu-item-wpml-ls-12-us"
                        className="menu-item wpml-ls-slot-12 wpml-ls-item wpml-ls-item-us wpml-ls-menu-item wpml-ls-last-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item menu-item-wpml-ls-12-us">
                        <a
                          title="US"
                          href="https://www.argonandco.com/us/about/?l_switcher=true">
                          <span className="wpml-ls-native" lang="us">
                            US
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <ul id="menu-main" className="menu">
                  <li
                    id="menu-item-89"
                    className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-88 current_page_item menu-item-89">
                    <a
                      href="https://www.argonandco.com/en/about/"
                      aria-current="page">
                      About
                    </a>
                  </li>
                  <li
                    id="menu-item-84"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-84">
                    <a href="https://www.argonandco.com/en/services/">
                      Services
                    </a>
                  </li>
                  <li
                    id="menu-item-83"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-83">
                    <a href="https://www.argonandco.com/en/industries/">
                      Industries
                    </a>
                  </li>
                  <li
                    id="menu-item-92"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-92">
                    <a href="https://www.argonandco.com/en/news-insights/">
                      News &amp; insights
                    </a>
                  </li>
                  <li
                    id="menu-item-91"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-91">
                    <a href="https://www.argonandco.com/en/careers/">Careers</a>
                  </li>
                  <li
                    id="menu-item-90"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-90">
                    <a href="https://www.argonandco.com/en/contact-us/">
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="content-wrap" className="mt-5">
        <div className="strip-padding-lg accent-background background ">
          <section className="section section--page-intro">
            <div className="container">
              <div className="row off-screen off-screen--rotate-up">
                <div className="col-md-6">
                  <h1 className="title title--xl title--bold text-white">
                    Services
                  </h1>
                </div>
                <div className="col-md-5 the-content">
                  <p>
                    <span className="intro text-white">
                      We help clients deliver operations driven transformations
                      in a single functional area or across multiple functions.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="section section--std">
            <div className="container">
              <div className="row link-list off-screen off-screen--link-list">
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="https://www.argonandco.com/en/services/operations-strategy/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      Operations strategy{' '}
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="https://www.argonandco.com/en/services/sustainability/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      Sustainability{' '}
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="https://www.argonandco.com/en/services/operational-performance/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      Operational performance{' '}
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="https://www.argonandco.com/en/services/new-products/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      New products{' '}
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="https://www.argonandco.com/en/services/procurement/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      Procurement{' '}
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="https://www.argonandco.com/en/services/supply-chain-planning/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      Supply chain planning{' '}
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="https://www.argonandco.com/en/services/manufacturing/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      Manufacturing{' '}
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="https://www.argonandco.com/en/services/logistics/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      Logistics{' '}
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="https://www.argonandco.com/en/services/channels-to-market/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      Channels to market{' '}
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="https://www.argonandco.com/en/services/maintenance-and-after-sales/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      Maintenance and <br />
                      after sales{' '}
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="https://www.argonandco.com/en/services/transformation-management/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      Transformation management{' '}
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="https://www.argonandco.com/en/services/digital-and-it/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      Digital and IT{' '}
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="https://www.argonandco.com/en/services/finance/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      Finance{' '}
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="https://www.argonandco.com/en/services/sga/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      SG&amp;A{' '}
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="https://www.argonandco.com/en/services/hr/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      HR{' '}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default MainPageEn;
