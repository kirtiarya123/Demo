<template>
  <div class="m-4">
    <h1 style="text-align: center">Billing Page</h1>
    <br />
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th width="100">Name</th>
          <th width="100">Quantity</th>
          <th width="100">Price</th>
          <th width="100">Total</th>
          <th width="50">Action</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td class="align-middle">
            <template v-if="item.edit === false">{{ item.name }}</template>
            <template v-else
              ><input type="text" class="form-control" v-model="item.name"
            /></template>
          </td>
          <td class="align-middle">
            <template v-if="item.edit === false">{{ item.quantity }}</template>
            <template v-else
              ><input type="text" class="form-control" v-model="item.quantity"
            /></template>
          </td>
          <td class="align-middle">
            <template v-if="item.edit === false">{{ item.price }}</template>
            <template v-else
              ><input type="text" class="form-control" v-model="item.price"
            /></template>
          </td>
          <td
            class="align-middle"
            v-effect="(item.total = Number(item.quantity) * Number(item.price))"
          >
            {{ item.total.toFixed(2) }}
          </td>
          <td>
            <button
              v-if="item.edit === false"
              type="button"
              class="btn btn-warning mx-2"
              @click="editItem(index, item)"
            >
              <i class="fa fa-edit"></i>
            </button>

            <button
              v-else
              item.edit="true"
              type="button"
              class="btn btn-success mx-2"
              @click="saveItem(item)"
            >
              <i class="fa fa-save"></i>
            </button>

            <button
              type="button"
              class="btn btn-danger mx-2"
              @click="removeItem(index)"
            >
              <i class="fa fa-trash-o"></i>
            </button>
          </td>
        </tr>

        <tr>
          <td class="align-middle text-start" colspan="3">Sub-Total</td>
          <td
            class="align-middle"
            v-effect="
              (subtotal =
                items.length >= 1
                  ? items
                      .map((i) => Number(i.total))
                      .reduce((acc, val) => acc + val)
                  : 0)
            "
          >
            {{ subtotal.toFixed(2) }}
          </td>
          <td rowspan="3"></td>
        </tr>
        <tr>
          <td class="align-middle text-start" colspan="3">Sales Tax</td>
          <td
            class="align-middle"
            v-effect="(taxtotal = Number(subtotal) * tax)"
          >
            {{ taxtotal.toFixed(2) }}
          </td>
        </tr>
        <tr>
          <td class="align-middle text-start" colspan="3">Total Price</td>
          <td
            class="align-middle"
            v-effect="(pricetotal = Number(subtotal) + Number(taxtotal))"
          >
            {{ pricetotal.toFixed(2) }}
          </td>
        </tr>
      </tbody>
    </table>
    <p>
      <button type="button" class="btn btn-primary" @click="createItem()">
        <i class="fa fa-plus"></i>
        Add New Item
      </button>
    </p>
    <br />
    <div class="pdf">
      <button type="button" class="btn btn-primary" @click="downloadPDF()">
        Download PDF
      </button>
    </div>
  </div>
</template>

<script>
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';
export default {
  name: "Billing",
  data() {
    return {
      selectedIndex: null,

      items: [
        {
          name: "",
          quantity: "",
          price: "",
          total: "",
          action: "",
        
        },
      ],
      items: [
        { name: "Item-1", quantity: 3, price: 12, total: 0, edit: false },
        { name: "Item-2", quantity: 5, price: 9.5, total: 0, edit: false },
        { name: "Item-3", quantity: 3, price: 8.7, total: 0, edit: false },
        { name: "Item-4", quantity: 7, price: 9.3, total: 0, edit: false },
      ],
      subtotal: 0,
      tax: 0.06,
      taxtotal: 0,
      pricetotal: 0,
    };
  },

  methods: {
    createItem() {
      this.items.push({
        name: "",
        quantity: 0,
        price: 0,
        total: 0,
        edit: true,
      });
      this.selectedIndex = this.items.length - 1;
    },

    removeItem(index) {
      this.items.splice(index, 1);
    },
    editItem(index, item) {
      this.item = item;
      this.selectedIndex = index;
      this.item.edit = true;
    },
    saveItem(item) {
      this.item = item;
      this.items.splice(this.selectedIndex, 1, this.item);
      this.item.edit = false;
    },

  downloadPDF() {
    var pdf = new jsPDF();
       
  //  var data = this.items.toString();
    pdf.text("Billing Page", 80, 10);
     pdf.text("Date : 17-05-2022", 70, 30);
   
 
    autoTable(pdf, {
  head: [['Name', 'Quantity', 'Price', 'Total']],
  margin: {top:50},
  body: [
    [ "Item-1", "3", "12", "36.00"],
    [ "Item-2", "5", "9.5", "47.50"],
    [ "Item-3", "3", "8.7", "26.10"],
    [ "Item-4", "7", "9.3",  "65.10"],
    [ "Sub-Total", , , "174.70"],
    [ "Sales Tax", , , "10.48"],
    [ "Total Price", , , "185.18"],
    
  ],
})
  pdf.save("Billing.pdf")
    
  },
  
    },

};
</script>
<style>
</style>