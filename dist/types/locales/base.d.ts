export interface BaseLang {
    save: string;
    confirm: string;
    cancel: string;
    done: string;
    noData: string;
    placeholder: string;
    select: string;
    video: {
        errorTip: string;
        clickRetry: string;
    };
    fixednav: {
        activeText: string;
        inactiveText: string;
    };
    infiniteloading: {
        pullRefreshText: string;
        loadText: string;
        loadMoreText: string;
    };
    pagination: {
        prev: string;
        next: string;
    };
    range: {
        rangeText: string;
    };
    calendaritem: {
        weekdays: Array<string>;
        end: string;
        start: string;
        confirm: string;
        title: string;
        monthTitle: Function;
        today: string;
        loadPreviousMonth: string;
        noEarlierMonth: string;
    };
    shortpassword: {
        title: string;
        description: string;
        tips: string;
    };
    uploader: {
        ready: string;
        readyUpload: string;
        waitingUpload: string;
        uploading: string;
        success: string;
        error: string;
        deleteWord: string;
    };
    countdown: {
        day: string;
        hour: string;
        minute: string;
        second: string;
    };
    address: {
        selectRegion: string;
        deliveryTo: string;
        chooseAnotherAddress: string;
    };
    signature: {
        reSign: string;
        unsupported: string;
    };
    ecard: {
        chooseText: string;
        otherValueText: string;
        placeholder: string;
    };
    timeselect: {
        pickupTime: string;
    };
    sku: {
        buyNow: string;
        buyNumber: string;
        addToCard: string;
    };
    skuheader: {
        skuId: string;
    };
    addresslist: {
        addAddress: string;
    };
    comment: {
        complaintsText: string;
        additionalReview: Function;
        additionalImages: Function;
    };
    searchbar: {
        basePlaceholder: string;
        text: string;
        test: string;
        title1: string;
        title2: string;
        title3: string;
        title4: string;
        title5: string;
        title6: string;
    };
    audio: {
        back: string;
        forward: string;
        pause: string;
        start: string;
        mute: string;
        tips: string;
    };
    datepicker: {
        year: string;
        month: string;
        day: string;
        hour: string;
        min: string;
        seconds: string;
    };
    pullToRefresh: {
        pullingText: string;
        canReleaseText: string;
        refreshingText: string;
        completeText: string;
    };
    watermark: {
        errorCanvasTips: string;
    };
}
