const prodList = [
  {
    id: 1,
    name: "Yesterday's hopes",
    desc: "Surprisingly heavy, this product can be a boon or a bane depending on how it is used. Not for the faint of heart.",
    price: 9.99,
    category: "Intangible",
    img: "https://images.rawpixel.com/image_400/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L3YxMDE1LTExMi0wMS5qcGc.jpg?s=JH3spP6JQCCfNzIZHYmzStSIrV2S4cwPJ9GgaWvxvI0",
  },
  {
    id: 2,
    name: "Tuna sandwich",
    desc: "Run of the mill tuna sandwich. Might have been too generous with the mayo.",
    price: 4.29,
    category: "Edible",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Cl4STi9D3KUaWEaJdhkOagHaDt%26pid%3DApi&f=1",
  },
  {
    id: 3,
    name: "Rock",
    desc: "Fairly smooth. Could get some pretty respectable skips in but then you'd risk losing it forever. This might have been someone's best friend once.",
    price: 7.99,
    category: "Tangible",
    img: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcC1zNzUtdGVkLTYxNDMtdGVkZHktY2hpbS5wbmc.png?s=sLVC2u4zpxTlv9XwFcaSzzqjBeMo2fs4pTJrtnZ4lw0",
  },
  {
    id: 4,
    name: "Swirling void",
    desc: "Something like the darkness that hides behind your eyes or the weight that seems to hover just beyond your shoulders. This purchase will make it more or less substantial. Whichever you do or don't fancy.",
    price: "? you have already paid the price",
    category: "Intangible",
    img: "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjg4Mi1hZXctNTEtYV8xLmpwZw.jpg?s=H4rE7Wi5YSymqtbsP-rk2yjsNOSHn7wMIbdTf5Q8Eew",
  },
  {
    id: 5,
    name: "Dino plushie",
    desc: "Rawr, how cute! Unlike its inspiration, this plush will surely stand the test of time.",
    price: 19.99,
    category: "Tangible",
    img: "https://target.scene7.com/is/image/Target/GUEST_99b84ba1-064c-4128-980e-a6df5b4c0fdd?wid=325&hei=325&qlt=80&fmt=pjpeg",
  },
  {
    id: 6,
    name: "Five grapes",
    desc: "Assorted grapes. A very special bundle of five assorted grapes from different locales. These grapes are handpicked and sure to deliver five flavors.",
    price: 12.49,
    category: "Edible",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Famericanlifestylemag.com%2Fwp-content%2Fuploads%2F2020%2F01%2Fgrapes-intext7.jpg&f=1&nofb=1",
  },
  {
    id: 7,
    name: "Erica",
    desc: "Erica!",
    price: 1.0,
    category: "Might fight back",
    img: "https://images.rawpixel.com/image_500/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjg4Mi1oZWluLTExLmpwZw.jpg?s=EEsRkRTHhk5Zjt0MWpeoTsfQ1o9WYUizlbZFnETUO6A",
  },
  {
    id: 8,
    name: "Half-melted 5lb bag of sugar-free gummy bears",
    desc: "Candy should not be so loud. Why do they make that sound when you crinkle the bag? What are they trying to say?",
    price: 45.99,
    category: "Might fight back",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F51XnFk1doaL._SY300_QL70_ML2_.jpg&f=1&nofb=1",
  },
  {
    id: 9,
    name: "A single piece of toast",
    desc: "Does toast still count as toast if it has once been toasted but has lost all its toast-like qualities after being ravaged by time and humidity? Can toast return to its origins as a humble slice of bread?",
    price: 0.99,
    category: "Might fight back",
    img: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvaXM5Njc1LWltYWdlLTAyLWpvYjYxOS1renc1YzgzaC5wbmc.png?s=Y1I3cE6hgi8_4BcwuHLzFF_AgsAQjdU8g7l43qZGxYU",
  },
  {
    id: 10,
    name: "Special offer: four reams of A5 paper",
    desc: "Sharon ordered way too much again. We are running out of space. The interns have piled them up and are playing the floor is lava.",
    price: 32.99,
    category: "Tangible",
    img: "https://m.media-amazon.com/images/I/71vQvmuLVUL._AC_SY450_.jpg",
  },
  {
    id: 11,
    name: "Please buy this paper",
    desc: "There is so much paper. Our boss is making us take it home with us so it doesn't stay in the office. I've started giving them out to friends and I don't want to be that guy.",
    price: 20.99,
    category: "Tangible",
    img: "https://m.media-amazon.com/images/I/71vQvmuLVUL._AC_SY450_.jpg",
  },
  {
    id: 12,
    name: "Cool sunglasses",
    desc: "Guaranteed to make you look way radder in the quickest of moments. Extra points if you wear them at night.",
    price: 99.99,
    category: "Tangible",
    img: "https://images.rawpixel.com/image_400/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvZnJnbGFzc2VzX3dhdGVyX3NwcmF5X3dhdGVyLWltYWdlLWt5YmVvMTV4LWt5YmV2dXUwLmpwZw.jpg?s=9e-R3jo_RsxYq4ycJrkpdn2Az4DawNUFAosowutH-Ms",
  },
];

export const categories = [
  "Tangible",
  "Intangible",
  "Edible",
  "Might fight back",
];

export function getProdList() {
  return prodList;
}

export function getProduct(id){
  return prodList.find((product) => product.id === Number(id));
}

export function filterProducts(category) {
  return prodList.filter((product) => product.category === category);
}
