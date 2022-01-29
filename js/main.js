function AddToCartFun() {
	// ------------------Create My Cart ------------------
	let flx = document.createElement("div");
	flx.className = "flx";
	let myimg = document.createElement("img");
	let myH = document.createElement("h3");
	let prices = document.createElement("h4");
	prices.className = "price-product";
	let QNts = document.createElement("h4");
	let trach = document.createElement("i");

	trach.className = "fa fa-trash remove-product";
	if (myArray !== "") {
		for (let i = 0; i < myArray.length; i++) {
			myimg.src = myArray[i].image;
			myH.textContent = myArray[i].name;
			prices.textContent = myArray[i].price;
			QNts.textContent = myArray[i].Qnt;
			flx.appendChild(myimg);
			flx.appendChild(myH);
			flx.appendChild(prices);
			flx.appendChild(QNts);
			flx.appendChild(trach);
			myvar.appendChild(flx);
			//myArray[i].remove();
		}
	}
	// ------------------ ------------------
	checkoutDiv.appendChild(checkout);
	myvar.appendChild(checkoutDiv);
	myNumCart.textContent = document.querySelectorAll(".flx").length;
	removeProduct = document.querySelectorAll(".remove-product");
	removeProduct.forEach((el) => {
		el.addEventListener("click", () => {
			el.parentElement.remove(this);
			myNumCart.textContent = document.querySelectorAll(".flx").length;
			if (document.querySelector(".cart").textContent == 0) {
				if (document.querySelector(".remove") == null) {
					myvar.appendChild(myhCart);
					myvar.removeChild(checkoutDiv);
				}
			}
			//
		});

		let myR = document.querySelectorAll(".flx");
	});

	//--------------------------------
}
//--------------------- Start Home Slider
var swiper = new Swiper(".mySwiper", {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
		delay: 5500,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
// ----------------------Start Home Slider

//------------ Satrt Login And Register Acount
console.log(document.querySelector(".fa-arrow-right"));
let loginForm = document.querySelector("#login-form");
loginForm.addEventListener("click", () => {
	document.querySelector("#myacount").classList.toggle("active");
	document.querySelector("#myacount").style.opacity = 1;
});
const closeForm = document.querySelector(".closeF");
closeForm.addEventListener("click", () => {
	document.querySelector("#myacount").classList.remove("active");
});
//------------------------------------------------------

let crAcount = document.querySelector("#register-acount");
crAcount.addEventListener("click", () => {
	document.querySelector("#myacount").classList.remove("active");
	document.querySelector("#register").classList.toggle("active");
});
//-------------------------------------------------------
let lgAcount = document.querySelector("#login-acount");
lgAcount.addEventListener("click", () => {
	document.querySelector("#register").classList.remove("active");
	document.querySelector("#myacount").classList.toggle("active");
});

//------------------ End Login And Register Acount
//------------ -------Start Header And NavBar
let myMenu = document
	.querySelector("#menu-barse")
	.addEventListener("click", () => {
		document.querySelector("#header .nav").classList.toggle("tab-mode");
		document.querySelector("#menu-barse").classList.toggle("fa-close");
		document.querySelector(".over").classList.toggle("over-lay");
		console.log(document.querySelector(".search").classList.remove(`show`));
	});

let mySearchBox = document
	.querySelector("#search-icon")
	.addEventListener("click", () => {
		console.log(document.querySelector(".search").classList.toggle(`show`));
		document.querySelector(".over").classList.remove("over-lay");
		document.querySelector("#nav").classList.add("tab-mode");
		document.querySelector("#menu-barse").classList.remove("fa-close");
	});
// ---------------Close munu
document.querySelector("#close-search").addEventListener("click", () => {
	document.querySelector("#header .nav").classList.add("tab-mode");
	console.log(document.querySelector(".search").classList.remove(`show`));
});
//------------ End Header And NavBar
//------------------- Start menu Left
let menuLeft = document.querySelector("#menu-slid");
menuLeft.addEventListener("click", () => {
	document.querySelector(".cat-col-1").classList.toggle("show-menu");
	menuLeft.classList.toggle("fa-times");
	console.log("oc");
});
// ------------------ End menu Left
//------------------- Liks product
document.querySelectorAll(".liks").forEach((e) => {
	e.addEventListener("click", () => {
		e.classList.toggle("liksRed");
		document.querySelector(".wish").textContent =
			document.querySelectorAll(".liksRed").length;
	});
});
// -------------------------------
let AddToCart = document.querySelectorAll(".add");
let myArray = [];
let myvar = document.querySelector("#cart-add");
let myNumCart = document.querySelector(".cart");
let myhCart = document.createElement("h3");
let checkout = document.createElement("a");
checkout.textContent = "checkout";
checkout.className = "btn";
checkout.href = "./otherPge/cart.html";
let checkoutDiv = document.createElement("div");
checkoutDiv.className = "checkout-div";
let removeProduct;
if (document.querySelector(".cart").textContent == 0) {
	myhCart.innerHTML = "this cart is empty";
	//myhCart.style.padding = "20px 20px";
	myhCart.className = "remove";
	myhCart.style.textAlign = "center";
	myvar.appendChild(myhCart);
}
function AddToCartFun() {
	// ------------------Create My Cart ------------------
	let flx = document.createElement("div");
	flx.className = "flx";
	let myimg = document.createElement("img");
	let myH = document.createElement("h3");
	let prices = document.createElement("h4");
	prices.className = "price-product";
	let QNts = document.createElement("h4");
	let trach = document.createElement("i");

	trach.className = "fa fa-trash remove-product";
	if (myArray !== "") {
		for (let i = 0; i < myArray.length; i++) {
			myimg.src = myArray[i].image;
			myH.textContent = myArray[i].name;
			prices.textContent = myArray[i].price;
			QNts.textContent = myArray[i].Qnt;
			flx.appendChild(myimg);
			flx.appendChild(myH);
			flx.appendChild(prices);
			flx.appendChild(QNts);
			flx.appendChild(trach);
			myvar.appendChild(flx);
			//myArray[i].remove();
		}
	}
	// ------------------ ------------------
	checkoutDiv.appendChild(checkout);
	myvar.appendChild(checkoutDiv);
	myNumCart.textContent = document.querySelectorAll(".flx").length;
	removeProduct = document.querySelectorAll(".remove-product");
	removeProduct.forEach((el) => {
		el.addEventListener("click", () => {
			el.parentElement.remove(this);
			myNumCart.textContent = document.querySelectorAll(".flx").length;
			if (document.querySelector(".cart").textContent == 0) {
				if (document.querySelector(".remove") == null) {
					myvar.appendChild(myhCart);
					myvar.removeChild(checkoutDiv);
				}
			}
			//
		});

		let myR = document.querySelectorAll(".flx");
	});

	//--------------------------------
}
function adding(e) {
	e.textContent = "In Cart";
	e.disabled = true;
	e.style.backgroundColor = "white";
	e.style.color = "var(--main-color)";
	//------------------------------
	if (document.querySelector(".cart").textContent !== 0) {
		if (document.querySelector(".remove") !== null) {
			myvar.removeChild(myhCart);
		}
	}
}
AddToCart.forEach((e) => {
	e.addEventListener("click", () => {
		// Start Check Items in Local Storage
		myItemsStorage = localStorage.getItem("product");

		// End Check Items in Local Storage
		//Style Btn Add cart after Click
		adding(e);

		let b = e.parentElement.parentElement.parentElement.firstElementChild;
		let nameProduct = e.parentElement.parentElement.firstElementChild;
		let price =
			nameProduct.nextElementSibling.nextElementSibling.firstElementChild
				.nextElementSibling;

		////////////////////////
		let qnt =
			nameProduct.nextElementSibling.nextElementSibling.nextElementSibling
				.nextElementSibling.firstElementChild.nextElementSibling.value;

		let myOb = {
			image: b.src,
			name: nameProduct.textContent,
			price: price.textContent,
			Qnt: qnt,
		};
		myArray.push(myOb);
		localStorage.setItem("product", myArray);
		// ------------------Create My Cart ------------------
		AddToCartFun();
		//--------------------------------
	});
});
// -((((((((((((((((((((((()))))))))))))))))))))))
let myArrayTwo = [];
let myObTwo;
let myProduct = document.querySelectorAll(".cat-col-2 .product-list");
console.log(myProduct);
myProduct.forEach((e) => {});

console.log(myArrayTwo);

document.querySelectorAll(".cart-Two").forEach((e) => {
	e.addEventListener("click", () => {
		let el = e.parentElement.parentElement;
		let imageT = el.firstElementChild;
		let nameT = imageT.nextElementSibling.firstElementChild.textContent;
		let priceT = imageT.nextElementSibling.nextElementSibling.firstElementChild;
		let QNtsT = priceT.nextElementSibling.nextElementSibling.value;
		myObTwo = {
			image: imageT.src,
			name: nameT,
			price: priceT.textContent,
			Qnt: QNtsT,
		};
		myArray.push(myObTwo);
		console.log(myArray);
		AddToCartFun();
	});
});

// Box cart
document.querySelector("#addToCart").onclick = () => {
	document.querySelector(".box-cart").classList.toggle("show");
};

// ------------------------------------------
var swiper = new Swiper(".review-slider", {
	spaceBetween: 20,
	centeredSlides: true,
	autoplay: {
		delay: 7500,
		disableOnInteraction: false,
	},
	loop: true,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		640: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	},
});