// console.log('print'); for checking js added or not
const detailsButton = document.getElementById('detail-submit-btn');

detailsButton.addEventListener('click', function ()
//event lister er kaj onclick diyeo kora jae
{
    const buyerDetails = document.getElementById('buyer-details-input');
    // console.log('buyerDetails', buyerDetails);

    document.getElementById('buyer-info').innerText = buyerDetails.value;

    buyerDetails.value = "";
})




const addProductBtn = document.getElementById('add-details-btn');

addProductBtn.addEventListener('click', function () {
    const infoTable = document.getElementById('info-table'); //ei part theke app2 use kortesi
    const itemName = document.getElementById('item-name-input');
    const itemPrice = document.getElementById('item-price-input');
    const itemQuantity = document.getElementById('item-quantity-input');

    console.log(itemName.value, itemPrice.value, itemQuantity.value);


    // <tr>
    //     <th >1</th>
    //     <td>Mark</td>
    //     <td>Otto</td>
    //     <td>@mdo</td>
    // </tr>
    //uporer ta onushare korlam  

    const totalPrice = parseInt(itemQuantity.value) + parseInt(itemPrice.value);
    //.value dei ni tai NaN dichilo


    console.log('total...', totalPrice);
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    td3.classList.add('item-total'); //evabe js diye dynamic bhabe class create kora jae
    th.innerText = itemName.value;
    td1.innerText = itemPrice.value;
    td2.innerText = itemQuantity.value;
    td3.innerText = totalPrice;

    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    infoTable.appendChild(tr);

    totalCalculation();
    itemName.value = "";
    itemPrice.value = "";
    itemQuantity.value = "";

})

function totalCalculation() {
    const subTotal = calculateSubTotal();
    // console.log(subTotal);
    const subTotalToDisplay = document.getElementById('sub-total');
    subTotalToDisplay.innerText = subTotal;

    const tax = subTotal * 0.2
    document.getElementById('tax').innerText = tax.toFixed(2); // dot er por 2 ghor show krbe
    document.getElementById('grand-total').innerText = subTotal + tax;
    document.getElementById('grand-total-2').innerText = subTotal + tax;
}

function calculateSubTotal() {

    // const cost = document.getElementsByClassName('item-total');
    // console.log('all prices', cost);

    let subTotal = 0;
    const cost = document.getElementsByClassName('item-total');
    for (let i = 0; i < cost.length; i++) {
        const element = cost[i];
        // console.log(element.innerText);
        const price = parseInt(element.innerText);
        subTotal = subTotal + price;
    }

    return subTotal;

}
