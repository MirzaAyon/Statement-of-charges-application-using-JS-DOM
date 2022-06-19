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
const addProductBtn = document.getElementById('add-details-btn');

addProductBtn.addEventListener('click', function () {
    const itemName = document.getElementById('item-name-input');
    const itemPrice = document.getElementById('item-price-input');
    const itemQuantity = document.getElementById('item-quantity-input');

    console.log(itemName.value, itemPrice.value, itemQuantity.value);
    //ekhn ei 3 ta likhe add e click korle console e 3 ta show korbe
    //ekhn upoer ja likha hoise ta nicher table e show korte hbe
    //ekhn table take track krbo
    // <tr>
    //     <th >1</th>
    //     <td>Mark</td>
    //     <td>Otto</td>
    //     <td>@mdo</td>
    // </tr>
    //etake js diye dynamic bhabe set krbo
    //apatoto comment kore rakhsi
})
