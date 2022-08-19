






document.getElementById('more').addEventListener('click' , function(){


var btn_all = document.getElementById('all').getAttributeNode("class").value;
var btn_eng = document.getElementById('eng').getAttributeNode("class").value;
var btn_art = document.getElementById('art').getAttributeNode("class").value;
var btn_human = document.getElementById('human').getAttributeNode("class").value;
var btn_economi = document.getElementById('economi').getAttributeNode("class").value;
var btn_videoedit = document.getElementById('videoedit').getAttributeNode("class").value;
var btn_sci = document.getElementById('sci').getAttributeNode("class").value;
var btn_tech = document.getElementById('tech').getAttributeNode("class").value;
var btn_cooking = document.getElementById('cooking').getAttributeNode("class").value;
var btn_marketing = document.getElementById('marketing').getAttributeNode("class").value;


if (btn_eng == 'label-gallery txt26-1 trans-0-4 is-actived') {

    document.getElementById('more').setAttribute("href" , "https://fanjou.ir/career/1");

}

else if (btn_economi == 'label-gallery txt26-1 trans-0-4 is-actived') {

   document.getElementById('more').setAttribute("href" , "https://fanjou.ir/career/4");

}

else if (btn_human == 'label-gallery txt26-1 trans-0-4 is-actived') {

    document.getElementById('more').setAttribute("href" , "https://fanjou.ir/career/3");

}


else if (btn_art == 'label-gallery txt26-1 trans-0-4 is-actived') {

    document.getElementById('more').setAttribute("href" , "https://fanjou.ir/career/2");

}

else if (btn_videoedit == 'label-gallery txt26-1 trans-0-4 is-actived') {

    document.getElementById('more').setAttribute("href" , "https://fanjou.ir/career/5");

}

else if (btn_sci == 'label-gallery txt26-1 trans-0-4 is-actived') {

    document.getElementById('more').setAttribute("href" , "https://fanjou.ir/career/6");

}

else if (btn_all == 'label-gallery txt26-1 trans-0-4 is-actived') {

    document.getElementById('more').setAttribute("href" , "https://fanjou.ir/career/");

}

else if (btn_tech == 'label-gallery txt26-1 trans-0-4 is-actived') {

    document.getElementById('more').setAttribute("href" , "https://fanjou.ir/career/7");

}

else if (btn_cooking == 'label-gallery txt26-1 trans-0-4 is-actived') {

    document.getElementById('more').setAttribute("href" , "https://fanjou.ir/career/8");

}

else if (btn_marketing == 'label-gallery txt26-1 trans-0-4 is-actived') {

    document.getElementById('more').setAttribute("href" , "https://fanjou.ir/career/9");

}


})
