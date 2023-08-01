/*!
* @nutui/nutui-react v2.0.8 Tue Aug 01 2023 18:05:10 GMT+0800 (中国标准时间)
* (c) 2023 @jdf2e.
* Released under the MIT License.
*/
const o = {
  save: "Save",
  confirm: "Confirm",
  cancel: "Cancel",
  done: "Done",
  noData: "No Data",
  placeholder: "Placeholder",
  select: "Select",
  video: {
    errorTip: "Error Tip",
    clickRetry: "Click Retry"
  },
  fixednav: {
    activeText: "Close Nav",
    inactiveText: "Open Nav"
  },
  infiniteloading: {
    pullRefreshText: "Pull Refresh",
    loadText: "Loading",
    loadMoreText: "Oops, here's the bottom"
  },
  pagination: {
    prev: "Previous",
    next: "Next"
  },
  range: { rangeText: "is overflow" },
  calendaritem: {
    weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    end: "End",
    start: "Start",
    confirm: "Confirm",
    title: "Calendar",
    monthTitle: (e, t) => `${e}/${Number(t) < 10 ? `0${Number(t)}` : t}`,
    today: "Today",
    loadPreviousMonth: "Load Previous Month",
    noEarlierMonth: "No Earlier Month"
  },
  shortpassword: {
    title: "Please input a password",
    description: "Verify",
    tips: "Forget password"
  },
  uploader: {
    ready: "Ready",
    readyUpload: "Ready to upload",
    waitingUpload: "Waiting for upload",
    uploading: "Uploading...",
    success: "Upload successful",
    error: "Upload failed",
    deleteWord: "The user blocked the deletion!"
  },
  countdown: {
    day: " Day ",
    hour: " Hour ",
    minute: " Minute ",
    second: " Second "
  },
  address: {
    selectRegion: "Choose Address",
    deliveryTo: "Delivery To",
    chooseAnotherAddress: "Choose Another Address"
  },
  signature: {
    reSign: "Re Sign",
    unsupported: "Sorry, the current browser doesn't support canvas, so we can't use this control!"
  },
  ecard: {
    chooseText: "Select",
    otherValueText: "Other Value",
    placeholder: "Placeholder"
  },
  timeselect: {
    pickupTime: "Pickup Time"
  },
  sku: {
    buyNow: "Buy Now",
    buyNumber: "Buy Number",
    addToCard: "Add to Card"
  },
  skuheader: {
    skuId: "Sku Number"
  },
  addresslist: {
    addAddress: "Add New Address"
  },
  comment: {
    complaintsText: "I have a complaint",
    additionalReview: (e) => `Review after ${e} days of purchase`,
    additionalImages: (e) => `There are ${e} follow-up comments`
  },
  searchbar: {
    basePlaceholder: "Go to jd.com and buy good things",
    text: "text",
    test: "test",
    title1: "basic usage",
    title2: "search box shape and maximum length",
    title3: "background settings inside and outside the search box",
    title4: "search box text settings",
    title5: "custom icon settings",
    title6: "data change monitoring"
  },
  audio: {
    back: "fastBack",
    forward: "forward",
    pause: "pause",
    start: "start",
    mute: "mute",
    tips: "The onplayend event will only be triggered when loop = false"
  },
  datepicker: {
    year: "Year",
    month: "Month",
    day: "Day",
    hour: "Hour",
    min: "Minute",
    seconds: "Second"
  },
  pullToRefresh: {
    pullingText: "Pulling",
    canReleaseText: "Release to refresh",
    refreshingText: "Loading...",
    completeText: "Refresh successful"
  },
  watermark: {
    errorCanvasTips: "Canvas is not supported in the current environment"
  }
};
export {
  o as default
};
