;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-gouwuche" viewBox="0 0 1000 1000">' +
    '' +
    '<path d="M70.1213 121.9183h108.4838957584019c6.4549 1.452 29.6181 8.3873 30.6545 33.2555 0.039 0.9324 0.1429 1.8597 0.3108 2.7771l87.978 479.1791c0.2049 1.1142 0.5037 2.2085 0.8934 3.2718 0.6596 1.7988 6.8606 18.0428 21.3344 34.4267 20.1302 22.7856 46.4274 34.8304 76.0496 34.8304h501.65944293485046c11.039 0 19.9873-8.9479 19.9873-19.9864s-8.9483-19.9864-19.9873-19.9864H395.82585892786295c-39.0931 0-56.0853-34.2937-59.3292-41.7847l-22.3897-121.9503h529.3817838037171c61.9785 0 93.1906-58.8211 94.4888-61.3254 0.3628-0.6995 0.6846-1.42 0.9624-2.1575l59.8998-159.1011c0.063-0.1669 0.1229-0.3358 0.1819-0.5047 8.7085-25.1549 3.4718-43.2037-2.4554-53.9154-13.5004-24.3975-40.7021-31.2888-43.7591-31.9943-1.4741-0.3398-2.9811-0.5117-4.4941-0.5117H265.0821426751159c-2.6663 0-5.2047 0.5326-7.5312 1.479l-8.4276-45.8999c-2.8022-47.3539-43.8651-66.377-65.4053-69.8237-1.0443-0.1669-2.1007-0.2508-3.158-0.2508H70.12133271106305c-11.038 0-19.9873 8.9479-19.9873 19.9864C50.1341 112.9704 59.0834 121.9183 70.1213 121.9183zM265.0821 236.4127h680.3865937397878c4.4981 1.54 12.6469 5.4543 16.1997 12.0338 2.7912 5.1695 2.6753 12.2697-0.3428 21.1057l-59.2822 157.4622c-3.2569 5.5942-24.1676 38.9636-58.5557 38.9636H310.00752520644346c-1.0883 0-2.1476 0.1109-3.189 0.2778l-42.2031-229.8662C264.7713 236.3927 264.9242 236.4127 265.0821 236.4127zM406.4961 745.7044c-38.7833 0-70.3362 31.5516-70.3362 70.3333s31.5529 70.3333 70.3362 70.3333c38.7843 0 70.3362-31.5516 70.3362-70.3333S445.2804 745.7044 406.4961 745.7044zM406.4961 842.4238c-14.5497 0-26.3872-11.837-26.3872-26.3861s11.8375-26.3861 26.3872-26.3861c14.5507 0 26.3882 11.837 26.3882 26.3861S421.0468 842.4238 406.4961 842.4238zM828.7621 745.7044c-38.7833 0-70.3352 31.5516-70.3352 70.3333s31.5519 70.3333 70.3352 70.3333 70.3362-31.5516 70.3362-70.3333S867.5444 745.7044 828.7621 745.7044zM828.7621 842.4238c-14.5497 0-26.3862-11.837-26.3862-26.3861s11.8375-26.3861 26.3862-26.3861c14.5507 0 26.3872 11.837 26.3872 26.3861S843.3118 842.4238 828.7621 842.4238z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dingwei" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M816.8428 332.8973c0-157.1369-129.324-284.5409-288.9861-284.5409-159.5924 0-288.9851 127.404-288.9851 284.5409 0 51.9004 14.3647 100.3704 38.9734 142.2643h-0.310272l245.7211 488.8525c0.8407 1.6742 2.5733 2.8211 4.5742 2.8211 1.9999 0 3.7335-1.1459 4.5742-2.8201L778.2502 475.1616h-0.35328C802.5907 433.2667 816.8428 384.7967 816.8428 332.8973M527.8843 475.1329c-79.7809 0-144.4915-63.7092-144.4915-142.2776 0-78.5254 64.7107-142.2633 144.4915-142.2633 79.8669 0 144.4925 63.7379 144.4925 142.2633C672.3779 411.4237 607.7512 475.1329 527.8843 475.1329"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1015.7783 938.2318 723.5205 644.0489c118.8301-156.9516 106.7182-381.4717-36.393-524.5819-156.4109-156.4109-410.0045-156.4109-566.4154 0-156.4109 156.375-156.4109 409.9697 0 566.3805 143.06 143.06 367.404 155.2425 524.3433 36.606l292.3223 294.2136c9.6051 9.6041 25.2221 9.6041 34.8252 0l43.5763-43.5763C1025.4172 963.4519 1025.4172 947.8369 1015.7783 938.2318zM194.9153 613.8132c-114.8621-114.8611-114.8621-301.0826 0-415.9089 114.8631-114.8621 301.0458-114.8621 415.9099 0 114.8631 114.8262 114.8631 301.0478 0 415.9089C495.9611 728.6764 309.7784 728.6764 194.9153 613.8132z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangyou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M399.211 856.28 438.794 895.864 804.44 530.143 438.794 164.464 399.211 204.047 725.337 530.167Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shouji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M643.836 153.302h-263.169c-32.934 0-59.821 26.948-59.821 59.818v598.294c0 32.902 26.887 59.821 59.821 59.821h263.169c32.905 0 59.821-26.918 59.821-59.821v-598.295c0-32.871-26.916-59.817-59.821-59.817zM476.353 201.143h71.797c6.61 0 12.008 5.366 12.008 11.977 0 6.645-5.398 11.977-12.008 11.977h-71.797c-6.581 0-11.913-5.332-11.913-11.977 0-6.611 5.333-11.977 11.913-11.977zM512.22 847.282c-19.806 0-35.897-16.032-35.897-35.868s16.092-35.93 35.897-35.93c19.898 0 35.93 16.093 35.93 35.93s-16.031 35.868-35.93 35.868zM679.798 751.592h-334.999v-478.653h334.999v478.653z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M146.525 106.326l770.544 770.544-39.946 39.946-770.544-770.544 39.946-39.946z" fill="#2c2c2c" ></path>' +
    '' +
    '<path d="M917.079 146.278l-770.544 770.544-39.946-39.946 770.544-770.544 39.946 39.946z" fill="#2c2c2c" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangxiajiantou" viewBox="0 0 1064 1024">' +
    '' +
    '<path d="M342.279 393.868l177.972 177.971 177.974-177.971 14.425 14.422-192.398 192.398-192.396-192.398z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ananzuiconv265" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M314.589 392.345l198.506 197.16 196.917-195.566c8.33-8.287 21.852-8.287 30.184 0 8.33 8.275 8.33 21.697 0 29.972l-207.232 205.823c-3.939 3.915-9.038 5.974-14.201 6.186-8.042 3.763-17.932 2.344-24.589-4.261l-210.255-208.849c-8.479-8.405-8.479-22.048 0-30.463 8.468-8.416 22.203-8.416 30.671-0.001z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfontgouwuche" viewBox="0 0 2336 1024">' +
    '' +
    '<path d="M1433.795826 657.119272l-412.292912 0c-9.610073 0-17.86031-6.866075-19.588687-16.318027l-81.255651-441.8517-90.981273 0c-11.002749 0-19.923173-8.919208-19.923173-19.923173 0-11.000316 8.920424-19.919524 19.923173-19.919524l107.575403 0c9.611289 0 17.856661 6.867291 19.588687 16.319244l81.2593 441.857782 395.699999 0c11.000316 0 19.92074 8.914343 19.92074 19.918308C1453.716566 648.196415 1444.797358 657.119272 1433.795826 657.119272L1433.795826 657.119272zM1408.177885 559.468966 1007.846175 559.468966c-10.9991 0-19.918308-8.922857-19.918308-19.926822 0-11.000316 8.919208-19.92074 19.918308-19.92074l386.412249 0 79.873922-217.992108L1042.27872 301.629296c-11.000316 0-19.918308-8.919208-19.918308-19.921957 0-11.000316 8.917992-19.92074 19.918308-19.92074l460.362736 0c6.50848 0 12.602197 3.179437 16.328974 8.509311 3.724344 5.329874 4.611035 12.147297 2.371806 18.26899l-94.464788 257.834805C1424.003307 554.243695 1416.531509 559.468966 1408.177885 559.468966L1408.177885 559.468966zM1050.78195 866.246906c-43.643668 0-79.157515-35.523577-79.157515-79.176976 0-43.632722 35.513846-79.130756 79.157515-79.130756s79.156298 35.498034 79.156298 79.130756C1129.933383 830.72333 1094.425619 866.246906 1050.78195 866.246906L1050.78195 866.246906zM1050.78195 747.777006c-21.680742 0-39.316034 17.621913-39.316034 39.294141 0 21.695338 17.637725 39.335495 39.316034 39.335495 21.677093 0 39.313602-17.640157 39.313602-39.335495C1090.095552 765.398919 1072.459043 747.777006 1050.78195 747.777006L1050.78195 747.777006zM1395.377429 866.246906c-43.643668 0-79.156298-35.523577-79.156298-79.176976 0-43.632722 35.51263-79.130756 79.156298-79.130756 43.652183 0 79.174543 35.498034 79.174543 79.130756C1474.550756 830.72333 1439.028396 866.246906 1395.377429 866.246906L1395.377429 866.246906zM1395.377429 747.777006c-21.680742 0-39.316034 17.621913-39.316034 39.294141 0 21.695338 17.635292 39.335495 39.316034 39.335495 21.692905 0 39.333063-17.640157 39.333063-39.335495C1434.710492 765.398919 1417.065469 747.777006 1395.377429 747.777006L1395.377429 747.777006zM1395.377429 747.777006"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wrong" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M936.166 199.461l-312.54 312.54 312.54 312.541c14.284 14.284 23.124 34.015 23.124 55.818 0 43.597-35.344 78.932-78.942 78.932-21.794 0-41.525-8.848-55.809-23.123v0l-312.54-312.54-312.541 312.54c-14.284 14.275-34.024 23.123-55.818 23.123-43.597 0-78.932-35.334-78.932-78.932 0-21.804 8.829-41.534 23.113-55.818v0l312.541-312.541-312.541-312.54c-14.284-14.284-23.113-34.025-23.113-55.818 0-43.588 35.335-78.932 78.932-78.932 21.794 0 41.534 8.829 55.818 23.123v0l312.541 312.54 312.54-312.54c14.284-14.294 34.015-23.123 55.809-23.123 43.597 0 78.942 35.344 78.942 78.932 0 21.793-8.839 41.534-23.124 55.818v0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-next" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M783.931751 476.552554 318.275027 10.89583c-21.823659-14.527773-50.943204-14.527773-72.766863 0-21.823659 21.823659-21.823659 50.943204 0 65.470977l436.537179 436.537179L252.80405 942.145279c-21.823659 21.823659-21.823659 50.943204 0 65.470977 21.823659 21.823659 50.943204 21.823659 65.470977 0l465.592725-465.592725C798.459524 527.495758 798.459524 498.376213 783.931751 476.552554L783.931751 476.552554zM783.931751 476.552554"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-Previous" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M240.131967 547.575106l465.483629 465.483629c21.818545 14.524369 50.931267 14.524369 72.749813 0 21.818545-21.818545 21.818545-50.931267 0-65.455636L341.994501 511.232192l429.140715-429.140715c21.818545-21.818545 21.818545-50.931267 0-65.455636-21.818545-21.818545-50.931267-21.818545-65.455636 0L240.131967 482.11947C225.607598 496.643839 225.607598 525.756561 240.131967 547.575106L240.131967 547.575106zM240.131967 547.575106"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wodexiaoxi" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M1023.773849 298.05021c-0.565888-96.65741-66.821895-164.527171-161.122631-165.038824-118.462019-0.647753-235.907894-0.971118-349.08249-0.971118-119.566166 0-238.399645 0.36225-353.204367 1.084705-91.155093 0.565888-158.079318 67.555605-159.121044 159.27761-1.294482 113.707738-1.278109 230.086305 0.038886 345.908194 0.852414 74.768891 45.914726 131.523499 120.54854 151.809521 7.79657 2.12029 15.436574 4.058432 24.278963 6.297426 0.328481 0.085958 0.659009 0.166799 0.992607 0.24764l0 197.629079 26.63666-18.512632c5.210675-3.620457 9.872858-6.78759 13.984503-9.587356 8.201799-5.572926 14.681374-9.982352 21.150716-14.94641 17.702174-13.589506 35.620265-27.489074 52.944839-40.934295 39.699164-30.80254 80.757279-62.651922 121.854279-92.806709 11.335163-8.319479 26.998911-13.903661 39.904849-14.227026 127.428228-3.226484 257.062703-5.164626 382.436132-7.036253l51.006697-0.766456c100.81408-1.520633 166.274978-66.842361 166.776398-166.415171C1024.387833 510.839571 1024.382717 402.564565 1023.773849 298.05021zM971.918831 637.57195c-0.226151 62.008262-41.199331 104.610546-101.96223 106.008382-63.34777 1.461281-127.806851 2.428306-190.144618 3.356444-82.258469 1.228991-167.32182 2.503007-251.004731 4.931313-25.164123 0.733711-53.510728 10.628058-75.831083 26.474978-43.357484 30.774911-85.906555 63.887053-127.056768 95.907327-10.246365 7.969509-20.712741 16.116049-31.205723 24.235984-0.027629-4.455475-0.059352-8.885368-0.086981-13.261025-0.189312-27.425629-0.376577-55.783491 0.480954-83.483366 1.030469-33.348526-15.161305-52.497655-49.503461-58.529021-61.442374-10.789741-92.660376-47.839565-92.77908-110.113887-0.257873-130.412189-0.25378-237.866503 0.022513-338.177116 0.187265-67.965951 41.906435-110.25408 108.87364-110.363573 117.997438-0.193405 235.95599-0.291642 350.603123-0.291642 118.202099 0 236.491179 0.103354 351.596753 0.313132 65.370847 0.113587 107.761306 42.310641 108.004853 107.503433C972.34555 405.705092 972.34555 521.942443 971.918831 637.57195z"  ></path>' +
    '' +
    '<path d="M368.70848 433.215656c-13.520945-13.202697-30.871101-20.777209-47.607274-20.777209l-0.508583 0c-17.98256 0.161682-36.164664 8.79941-49.880037 23.695678-13.43908 14.59951-20.415982 32.954553-19.131733 50.366108 2.562359 34.779108 35.0861 65.278749 69.594031 65.278749 0.98749 0 1.986237-0.021489 2.968611-0.075725 16.957207-0.874927 34.087353-9.263991 46.988174-23.016203 12.981662-13.834076 20.129456-31.439036 19.617803-48.300053C390.235772 463.5925 382.202818 446.396863 368.70848 433.215656z"  ></path>' +
    '' +
    '<path d="M526.523785 412.896888c-2.152013-0.25378-4.359284-0.378623-6.54916-0.378623-16.60212 0-33.818223 7.296173-47.236837 20.017916-13.510712 12.8077-21.744233 29.825282-22.596647 46.685275-1.780553 35.237549 29.372981 69.736271 65.36573 72.380494 1.375324 0.102331 2.777253 0.150426 4.169973 0.150426 33.81413 0 66.267263-29.950126 69.443605-64.09683C592.379679 452.703499 562.54314 417.071977 526.523785 412.896888z"  ></path>' +
    '' +
    '<path d="M727.264739 413.231509c-2.789533-0.421602-5.659907-0.636496-8.525164-0.636496-34.196847 0-66.816778 30.132274-69.799716 64.48671-3.037173 34.95 27.030633 70.37686 63.082734 74.331939 2.044566 0.226151 4.13825 0.339738 6.220678 0.339738 33.257451 0 65.013713-28.385491 69.346391-61.98268 2.168386-16.829294-3.345188-34.93465-15.133675-49.681516C760.894673 425.62477 744.422514 415.83173 727.264739 413.231509z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-huiyuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M972.798 972.797l-38.405 0c-24.705-202.004-217.914-364.794-422.394-364.794S114.31 770.793 89.6 972.797L51.2 972.797c20.217-186.26 152.025-338.939 323.462-390.564-87.937-47.08-150.662-134.632-150.662-243.034 0-155.52 135.725-287.999 287.999-287.999s287.999 132.48 287.999 287.999c0 108.402-62.75 195.955-150.66 243.034C820.753 633.858 952.578 786.538 972.798 972.797zM761.593 339.199c0-127.237-125.01-249.599-249.594-249.599-124.59 0-249.599 122.362-249.599 249.599s125.01 230.399 249.599 230.399C636.583 569.599 761.593 466.436 761.593 339.199z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-history" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 64c-162.977 0-305.61 87.038-384 217.155L128 128 64 128l0 224 0 32 18.552 0 67.298 0L320 384l0-64L179.392 320C245.789 205.227 369.869 128 512 128c212.077 0 384 171.923 384 384S724.077 896 512 896c-190.271 0-348.222-138.387-378.69-320L68.537 576C99.592 793.106 286.306 960 512 960c247.424 0 448-200.576 448-448S759.424 64 512 64zM448 256 448 512 448 576 512 576 704 576 704 512 512 512 512 256Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-my-attention" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M818.324249 253.255422c-94.405107-95.745969-190.611998-71.778051-259.289304 0L511.895245 301.694083l-47.1397-48.438661c-68.719208-71.778051-165.093707-97.170636-259.289304 0-69.138227 71.359031-64.361404 193.628939 4.357803 265.406989l302.071201 315.77314 302.071201-315.77314C882.643752 446.926262 888.049104 323.985924 818.324249 253.255422zM771.184549 495.406825l-259.289304 266.370734-259.289304-266.370734c-61.595875-64.319502-61.595875-153.570669 0-217.890171 61.595875-64.361404 126.962927-40.142074 188.558802 24.219331l70.730502 72.61609L582.583845 301.694083c61.637777-64.361404 127.046731-88.580735 188.600704-24.219331C832.780424 341.836157 832.780424 431.087323 771.184549 495.406825z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)