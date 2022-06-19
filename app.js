// console.log('print'); for checking js added or not
const detailsButton = document.getElementById('detail-submit-btn');

detailsButton.addEventListener('click', function ()
//event lister er kaj onclick diyeo kora jae
{
    const buyerDetails = document.getElementById('buyer-details-input');
    // console.log('buyerDetails', buyerDetails);

    document.getElementById('buyer-info').innerText = buyerDetails.value;
    //ekhn buyer details e ja likhbo, ta invoice to te show krbe 
    buyerDetails.value = "";
})
//ekhn buyer details e kichu likhe click korle sheta inspact er por console e show kore
//text area shoho show krse