
const el1 = document.querySelector(".scroll");
const height1 = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    el1.style.width = `${(scrollTop / height1) * 100}%`;
});

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let btn21 = document.getElementById('top-btn');

window.onscroll = function() {
  if (window.scrollY >= 600) {
    btn21.style.display = 'block';
  } else {
    btn21.style.display = 'none';
  }
}

btn21.onclick = function() {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth"
  });
}
//  .>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..

let products = {
    1: [
      {
        img: "images/Accessories1.jpg",
        alt: "Accessories1",
        category: "Accessories",
        title: "Elegant bracelet",
        price: "$30.00",
        gender: "women",
        shortDescription:
          "A pair of elegant bracelets – one adorned with timeless pearls, and the other a gold-toned beauty featuring pearls and a delicate rose at the center. A perfect touch of sophistication.",
        longDescription:
          "Add a touch of elegance to your style with this exquisite bracelet set. The first bracelet is crafted entirely from lustrous pearls, embodying classic sophistication. The second bracelet features a stunning gold-tone design, adorned with pearls and a delicate rose at the center, creating a charming and feminine look. Perfect for special occasions or elevating your everyday elegance.",
        ProductCode: "Acc-W-001",
        color: "#b8652e",
        colors: ["red", "blue", "black"] ,
        colorName:"Burnt Orange",
      },
      {
        img: "images/shoes10.png",
        alt: "shoes10",
        category: "Shoes",
        title: "Plain brown shoes",
        price: "$75.00",
        discount: "20%",
        gender: "women",
        shortDescription:
          "Classic men's shoes in beige and brown, offering a timeless and versatile style for any occasion.",
        longDescription:
          "Step into effortless style with these classic men's shoes in a refined beige and brown combination. Designed for both comfort and elegance, they feature a sleek and versatile look that pairs well with casual and formal outfits alike. Perfect for everyday wear or special occasions.",
        ProductCode: "Sho-W-002",
        color: "#9e694d",
        colors: ["red", "blue", "black"] ,
        colorName:"Rustic Clay",
  
      },
      {
        img: "images/clothing16.png",
        alt: "clothing16",
        category: "Clothing",
        title: "Two-tone dress",
        subcategory: "dresses",
        price: "$130.00",
        gender: "women",
        shortDescription:
          " Elegant two-tone maxi dress in olive green and beige, perfect for modest wear with a graceful and sophisticated look. ",
        longDescription:
          "Step into timeless elegance with this stunning two-tone maxi dress, designed for a modest and sophisticated style. Featuring a beautiful combination of olive green and beige, this dress offers a flowy and flattering silhouette, making it perfect for both casual outings and special occasions. A chic and versatile choice for hijab fashion. ",
        ProductCode: "Clot-W-003",
        color: "#aa9d8a",
        colors: ["red", "blue", "black"] ,
        colorName:"Pale Stone",
  
      },
      {
        img: "images/handbag3.png",
        alt: "handbag3",
        category: "HandBag",
        title: "Light brown women's bag",
        price: "$60.00",
        gender: "women",
        shortDescription:
          " Chic light brown mini bag with a delicate pearl-adorned brooch at the center, adding a touch of elegance to your style. ",
        longDescription:
          "Elevate your look with this stylish light brown mini bag, designed for elegance and practicality. Featuring a sleek compact design, it is adorned with a beautiful central brooch accented with a lustrous pearl, adding a refined and feminine touch. Perfect for both casual and dressy occasions.",
        ProductCode: "Hand-W-004",
        color: "#d0cac2",
        colors: ["red", "blue", "black"] ,
        colorName:"Misty Beige",
  
      },
      {
        img: "images/clothing12.png",
        alt: "clothing12",
        category: "Clothing",
        title: "Men's beige pants",
        subcategory: "pants",
        price: "$70.00",
        gender: "men",
        shortDescription:
          " Versatile men's pants in four solid colors – navy blue, light blue, black, and beige – for a classic and stylish look. ",
        longDescription:
          " Upgrade your wardrobe with these classic men's pants, available in four elegant solid colors: navy blue, light blue, black, and beige. Designed for comfort and versatility, they offer a perfect fit for both casual and formal occasions. A must-have staple for a refined and timeless style.",
        ProductCode: "Clot-M-005",
        color: ["#cfc0a3", "#282e46", "#b2b8b8","#505c4e","#222128"],   
        colorNames: ["Pale Gold", "Dark Navy", "Silver Mist", "Olive Green","Dark Plum"], // أسماء الألوان
      },
      {
        img: "images/shoes2.png",
        alt: "shoes2",
        category: "Shoes",
        title: "Blue and brown shoes",
        price: "$90.00",
        gender: "men",
        shortDescription:
          "Stylish men's shoes in blue and brown, inspired by the classic sneaker design for a trendy and comfortable look.",
        longDescription:
          "Step up your style with these blue and brown men's shoes, featuring a design reminiscent of classic high-top sneakers. Combining comfort with a modern aesthetic, they are perfect for casual outings and everyday wear. A versatile addition to any wardrobe.",
        ProductCode: "Sho-M-006",
        color: "#343b35",
        colors: ["red", "blue", "black"] ,
        colorName:"Dark Forest Green",
      },
      {
        img: "images/glasses1.png",
        alt: "glasses1",
        category: "Glasses",
        title: "Men's glasses",
        price: "$30.00",
        gender: "men",
        shortDescription:
          " Stylish men's glasses with a brown frame and sleek black lenses for a timeless and modern look.",
        longDescription:
          "Elevate your style with these classic men's glasses featuring a rich brown frame and bold black lenses. Designed for both fashion and functionality, they offer a sophisticated and versatile look suitable for any occasion. Perfect for adding a refined touch to your everyday outfit.",
        ProductCode: "Glass-M-007",
        color: "#474141",
        colors: ["red", "blue", "black"] ,
        colorName:"Charcoal Brown",
      },
      {
        img: "images/clothing11.png",
        alt: "clothing11",
        category: "Clothing",
        title: "Distinctive shirt",
        price: "$50.00",
        subcategory: "shirts",
        discount: "10%",
        gender: "men",
        shortDescription:
          "Stylish and distinctive men's shirt in four colors, featuring two side pockets for a modern and practical look. ",
        longDescription:
          "Upgrade your wardrobe with this unique four-tone men's shirt, designed for both style and functionality. Featuring two convenient side pockets, this shirt blends classic elegance with a modern touch. Perfect for casual and semi-formal occasions, offering comfort and versatility in every wear.",
        ProductCode: "Clot-M-008",
        color: ["#1c1b1f", "#979ea4", "#8f8061","#555559"],   
        
        colorNames: ["Deep Charcoal", "Slate Gray", "Golden Taupe", "Olive Gray"], // أسماء الألوان
      },
      {
        img: "images/clothing24.png",
        alt: "clothing24",
        category: "Clothing",
        title: "Dress with bow",
        price: "$120.00",
        subcategory: "dresses",
        discount: "15%",
        gender: "women",
        shortDescription:
          " Elegant solid-colored silk dress featuring a chic bow detail for a sophisticated and graceful look. ",
        longDescription:
          "Embrace timeless elegance with this luxurious solid silk dress, designed for a sleek and refined appearance. The delicate bow accent adds a touch of femininity, making it perfect for special occasions or an effortlessly classy everyday style. Soft, smooth, and effortlessly graceful.",
        ProductCode: "Clot-W-009",
        color: "#b6937f",
        colors: ["red", "blue", "black"] ,
        colorName:"Warm Sand",
      },
      {
        img: "images/makeup2.png",
        alt: "makeup2",
        category: "MakeUp",
        title: "Foundation brand",
        price: "$35.00",
        gender: "women",
        shortDescription:
          "Long-lasting waterproof foundation in a new, sleek packaging for flawless coverage all day. ",
        longDescription:
          "Discover the ultimate beauty essential with our newly packaged waterproof foundation. Designed for all-day wear, it provides seamless coverage, a smooth finish, and resistance to water and humidity. Perfect for a flawless, long-lasting look in any condition.",
        ProductCode: "Make-W-010",
        color: ["#F1E1C6", " #D1B29C", " #F1C27D","#D18F6A"," #C97B4F"  ,"#6D4C41"],   
        colorNames: ["Ivory", "Beige", "Golden Beige", "Tan" ,"Golden Tan" ,"Deep Brown"], // أسماء الألوان
      },
  
      {
        img: "images/Accessories2.png",
        alt: "Accessories4",
        category: "Accessories",
        title: "necklace chain",
        price: "$40.00",
        gender: "women",
        shortDescription:
          "Elegant silver necklace chain featuring a delicate brooch with a heart-shaped centerpiece for a timeless and romantic touch.",
        longDescription:
          "Add a touch of elegance to your look with this stunning silver necklace chain. Designed with a beautifully crafted brooch, it showcases a heart-shaped centerpiece that exudes charm and sophistication. Perfect for everyday wear or special occasions, making it a meaningful and stylish accessory.",
        ProductCode: "Acc-W-011",
        color: "#a5989e",
        colors: ["red", "blue", "black"] ,
        colorName:"Dusty Lavender",
      },
      {
        img: "images/glasses6.png",
        alt: "glasses6",
        category: "Glasses",
        title: "Fashionable women's glasses",
        price: "$55.00",
        gender: "women",
        shortDescription:
          " Trendy pink women's glasses with a stylish, fashion-forward design for a bold and elegant look. ",
        longDescription:
          "Stay ahead of the fashion game with these chic pink women's glasses, designed to blend modern trends with timeless elegance. Featuring a sleek and contemporary frame, they add a touch of sophistication to any outfit. Perfect for fashion lovers who want to make a stylish statement.",
        ProductCode: "Glass-W-012",
        color: "#e0896d",
        colors: ["red", "blue", "black"] ,
        colorName:"Peachy Orange",
      },
      {
        img: "images/handbag5.png",
        alt: "handbag5",
        category:"HandBag",
        title: "formal bag",
        price: "$77.00",
        gender: "men",
        shortDescription:
          " Elegant large formal bag with a matching wallet for a sophisticated and practical style. ",
        longDescription:
          "Upgrade your accessories with this stylish large formal bag, designed for elegance and functionality. Featuring a spacious interior for all your essentials, it comes with a matching wallet for added convenience. Perfect for work, events, or everyday sophistication.",
        ProductCode: "Hand-M-013",
        color: "#39342b",
        colors: ["red", "blue", "black"] ,
        colorName:"shadowed Forest",
      },
  
      {
        img: "images/Accessories25.png",
        alt: "Accessories25",
        category: "Accessories",
        title: "Excellent quality leather belt",
        subcategory: "Belts",
        price: "$30.00",
        gender: "men",
        shortDescription:
          " Premium quality leather belt with a strong and durable design for a timeless and refined look.",
        longDescription:
          "Experience the perfect blend of durability and elegance with this high-quality leather belt. Crafted from premium materials, it offers a strong and sturdy design, ensuring long-lasting wear and a sophisticated finish. Ideal for both casual and formal outfits.e",
        ProductCode: "Acc-W-014",
        color: "#03090b",
        colors: ["red", "blue", "black"] ,
        colorName:"Midnight Black",
      },
      {
        img: "images/clothing27.png",
        alt: "clothing27",
        category: "Clothing",
        title: "Full suit classy",
        subcategory: "suit",
        price: "$230.00",
        gender: "men",
        shortDescription:
          "Elegant six-piece gray suit set, including a shirt, vest, jacket, pants, bow tie, and pocket square for a complete classy look.",
        longDescription:
          "Step into sophistication with this refined five-piece gray suit set, perfect for formal occasions. This set includes a tailored jacket, matching pants, a stylish vest, a crisp shirt, a sleek bow tie, and a coordinating pocket square. Designed for elegance and comfort, it’s the ultimate choice for a distinguished and polished appearance.",
        ProductCode: "Clot-M-015",
        color: "#33312f",
        colors: ["red", "blue", "black"] ,
        colorName:"Dark Espresso",
      },
      {
        img: "images/shoes5.png",
        alt: "shoes5",
        category: "Shoes",
        title: "comfortable shoes",
        price: "$80.00",
        discount: "20%",
        gender: "men",
        shortDescription:
          " Stylish and comfortable men's shoes in gray and white, perfect for all-day wear. ",
        longDescription:
          "Upgrade your footwear collection with these sleek gray and white men's shoes, designed for ultimate comfort and modern style. Featuring a lightweight and breathable design, they provide excellent support for everyday wear, whether casual or sporty. A perfect blend of fashion and function.",
        ProductCode: "Sho-M-016",
        color: "#8e8c8a",
        colors: ["red", "blue", "black"] ,
        colorName:"Sandy Gray",
      },
    ],
    2: [
      {
        img: "images/clothing10.png",
        alt: "clothing10",
        category: "Clothing",
        title: "Sweet blouse",
        subcategory: "blouses",
        price: "$40.00",
        gender: "women",
        shortDescription:
          " Chic and soft cropped blouse for a stylish and effortless look. ",
        longDescription:
          "Stay trendy with this elegant and soft cropped blouse, designed for a sleek and modern style. With its flattering fit and comfortable fabric, it's perfect for casual outings or layering with your favorite outfits. A must-have for a fashionable wardrobe.",
        ProductCode: "Clot-W-017",
        color: "#ececec",
        colors: ["red", "blue", "black"] ,
        colorName:"Pale Silver",
      },
      {
        img: "images/clothing15.jpg",
        alt: "clothing15",
        category: "Clothing",
        title: "Plain formal trousers",
        subcategory: "pants",
        price: "$55.00",
        gender: "women",
        shortDescription:
          " Elegant women's plain formal trousers for a sophisticated and polished look. ",
        longDescription:
          "Upgrade your wardrobe with these sleek and stylish women's formal trousers. Designed with a tailored fit and a classic plain design, they offer versatility and elegance for work, events, or everyday chic styling. Perfect for a refined and professional appearance.",
        ProductCode: "Clot-W-018",
        color: "#b9b3ab",
        colors: ["red", "blue", "black"] ,
        colorName:"Soft Pebble",
      },
      {
        img: "images/makeup12.png",
        alt: "makeup12",
        category: "MakeUp",
        title: "Charcoal waterproof eyeliner",
        price: "$45.00",
        discount: "50%",
        gender: "women",
        shortDescription:
          "Long-lasting charcoal waterproof eyeliner for bold and smudge-proof definition.   ",
        longDescription:
          "Achieve flawless eye definition with this charcoal waterproof eyeliner. Designed for all-day wear, it delivers a rich, intense color that stays in place, even in humid or rainy conditions. Its smooth application ensures precision and a bold, defined look that lasts throughout the day without smudging. Perfect for a sleek, dramatic eye look.",
        ProductCode: "Make-W-019",
        color: "#0a0606",
        colors: ["red", "blue", "black"] ,
        colorName:"Ebony Black",
      },
      {
        img: "images/Accessories14.png",
        alt: "Accessories14",
        category: "Accessories",
        title: "Pearl earring",
        price: "$20.00",
        gender: "women",
        shortDescription:
          "Elegant silver earrings with a beautiful pearl for a timeless and sophisticated look. ",
        longDescription:
          "Add a touch of luxury to your collection with these stunning silver earrings, featuring a lustrous pearl at the center. Designed for timeless elegance, these earrings are perfect for both casual and formal occasions, offering a refined and feminine touch to any outfit.",
        ProductCode: "Acc-W-020",
        color: "#b39171",
        colors: ["red", "blue", "black"] ,
        colorName:"Golden Oak",
      },
      {
        img: "images/clothing32.png",
        alt: "clothing32",
        category: "Clothing",
        title: "Black jeans are a modern trend.",
        subcategory: "jeans",
        price: "$70.00",
        gender: "men",
        shortDescription:
          " Modern black jeans for men, offering a sleek and versatile look that pairs effortlessly with any outfit. ",
        longDescription:
          "Stay on trend with these stylish black jeans for men, designed for a slim and flattering fit. These jeans offer versatility and can easily transition from casual to semi-formal settings. Made with durable fabric, they provide both comfort and a sharp, modern look. A wardrobe essential for every man.",
        ProductCode: "Clot-M-021",
        color: "#090708",
        colors: ["red", "blue", "black"] ,
        colorName:"Deep Charcoal",
      },
      {
        img: "images/clothing4.png",
        alt: "clothing4",
        category: "Clothing",
        title: "Grey shirt modern cut",
        price: "$50.00",
        subcategory: "shirts",
        discount: "30%",
        gender: "men",
        shortDescription:
          " Sleek and modern-cut grey shirt for men, offering a clean and sophisticated look. ",
        longDescription:
          "Elevate your wardrobe with this stylish grey shirt for men, designed with a modern cut for a sharp and flattering fit. The plain design makes it versatile for both casual and formal occasions, while the soft fabric ensures comfort throughout the day. Perfect for a contemporary, polished look.",
        ProductCode: "Clot-M-022",
        color: "#c4caca",
        colors: ["red", "blue", "black"] ,
        colorName:"Light Slate Gray",
      },
      {
        img: "images/glasses3.png",
        alt: "glasses3",
        category: "Glasses",
        title: "Modern sunglasses",
        price: "$60.00",
        gender: "men",
        shortDescription:
          " Chic modern sunglasses in black and brown, offering a stylish and protective look.",
        longDescription:
          "Step into the sun with these modern sunglasses in a sleek black and brown design. Crafted for both style and functionality, they provide excellent UV protection while adding a trendy touch to your outfit. Perfect for casual outings or adding a bold statement to any look.",
        ProductCode: "Glass-M-023",
        color: "#9e4a39",
        colors: ["red", "blue", "black"] ,
        colorName:"Rust Red",
      },
      {
        img: "images/handbag9.png",
        alt: "handbag9",
        category: "HandBag",
        title: "Excellent material bag",
        price: "$75.00",
        gender: "men",
        shortDescription:
          " High-quality men's gray bag, crafted from excellent materials for durability and style. ",
        longDescription:
          "This men's gray bag is designed with both practicality and style in mind. Made from premium materials, it offers durability and a sleek, modern look. Perfect for everyday use, whether for work, travel, or casual outings, providing both functionality and sophistication.",
        ProductCode: "Hand-M-024",
        color: "#807d78",
        colors: ["red", "blue", "black"] ,
        colorName:"Warm Taupe",
      },
      {
        img: "images/clothing26.png",
        alt: "clothing26",
        category: "Clothing",
        title: "Black soft dress",
        subcategory: "dresses",
        price: "$180.00",
        discount: "45%",
        gender: "women",
        shortDescription:
          "Chic black soft dress, perfect for parties and evening events, offering a sleek and elegant look. ",
        longDescription:
          "This stunning black soft dress is designed for glamorous nights out, such as parties and evening soirées. The lightweight fabric offers comfort while maintaining a sleek, flattering silhouette. With its sophisticated style, this dress is the ideal choice for making a bold, elegant statement at your next special occasion.",
        ProductCode: "Clot-W-025",
        color: "#0d0d0d",
        colors: ["red", "blue", "black"] ,
        colorName:"Jet Black",
      },
      {
        img: "images/clothing18.png",
        alt: "clothing18",
        category: "Clothing",
        title: "Women's buttoned skirt",
        price: "$60.00",
        subcategory: "skirts",
        gender: "women",
        shortDescription:
          "Elegant plain women's skirt featuring buttons down the center for a stylish and classic look.",
        longDescription:
          "This chic, plain women's skirt offers a timeless design with buttons running down the center, adding a touch of sophistication. Perfect for both casual and formal settings, it provides a flattering and versatile option for various occasions. A must-have piece for a modern, classic wardrobe.",
        ProductCode: "Clot-W-026",
        color: "#a2a199",
        colors: ["red", "blue", "black"] ,
        colorName:"Sage Gray",
      },
      {
        img: "images/clothing7.png",
        alt: "clothing7",
        category: "Clothing",
        title: "Blouse with tie",
        price: "$50.00",
        subcategory: "blouses",
        gender: "women",
        shortDescription:
          " Sleek and simple women's blouse with a tie detail, offering a clean and elegant look. ",
        longDescription:
          "This stylish women's blouse features a simple, solid design with a chic tie detail at the neck. The versatile, minimalist look makes it perfect for both professional and casual settings, adding a touch of sophistication and femininity to your outfit. Ideal for layering or wearing on its own.",
        ProductCode: "Clot-W-027",
        color: "#c5b3a5",
        colors: ["red", "blue", "black"] ,
        colorName:"Soft Taupe",
      },
      {
        img: "images/Accessories4.png",
        alt: "Accessories4",
        category: "Accessories",
        title: "Crystal Rings Set",
        price: "$44.00",
        gender: "women",
        shortDescription:
          " Elegant set of four crystal rings, plated in gold for a luxurious and sparkling look. ",
        longDescription:
          "Add a touch of glamour to your jewelry collection with this exquisite set of four crystal rings. Each ring is plated in gold, featuring beautifully crafted crystals that sparkle with elegance. Perfect for stacking or wearing individually, these rings are a stylish and luxurious accessory for any occasion.",
        ProductCode: "Acc-W-028",
        color: "#b3775a",
        colors: ["red", "blue", "black"] ,
        colorName:"Rustic Copper",
      },
      {
        img: "images/shoes7.png",
        alt: "shoes7",
        category: "Shoes",
        title: "Formal shoes",
        price: "$105.00",
        gender: "men",
        shortDescription:
          "  Elegant brown and black formal shoes for men, perfect for pairing with suits for a refined look. ",
        longDescription:
          "These stylish formal shoes for men are designed in classic brown and black, making them the ideal choice to complement any suit. Crafted for comfort and elegance, they offer a sleek, polished finish, perfect for formal occasions, business settings, or any time you want to make a sophisticated statement.",
        ProductCode: "Sho-M-029",
        color: "#292726",
        colors: ["red", "blue", "black"] ,
        colorName:"Charcoal Black",
      },
      {
        img: "images/Accessories22.png",
        alt: "Accessories22",
        category: "Accessories",
        title: "Latest look watch",
        price: "$90.00",
        subcategory: "watches",
        gender: "men",
        shortDescription:
          " Sleek black men's watch with the latest design for a modern and stylish look. ",
        longDescription:
          "Stay on time and on trend with this men's black watch, featuring a contemporary design that adds sophistication to any outfit. Crafted with attention to detail, it combines modern aesthetics with reliable functionality, making it the perfect accessory for everyday wear or special occasions.",
        ProductCode: "Acc-M-030",
        color: "#181615",
        colors: ["red", "blue", "black"] ,
        colorName:"Espresso Black",
      },
      {
        img: "images/Accessories24.png",
        alt: "Accessories24",
        category: "Accessories",
        title: "luxury leather belt",
        price: "$35.00",
        subcategory: "belts",
        gender: "men",
        shortDescription:
          "Premium brown leather belt, crafted for luxury and durability, perfect for elevating your style.",
        longDescription:
          "Indulge in elegance with this luxury brown leather belt. Designed for both style and durability, it features high-quality craftsmanship and a sleek finish. Ideal for formal or casual wear, this belt adds a sophisticated touch to any outfit, ensuring long-lasting comfort and refined style.",
        ProductCode: "Acc-M-031",
        color: "#41322f",
        colors: ["red", "blue", "black"] ,
        colorName:"Chestnut Brown",
      },
      {
        img: "images/clothing5.png",
        alt: "clothing5",
        category: "Clothing",
        title: "Full suit with the latest fashion",
        price: "$200.00",
        subcategory: "suit",
        discount: "35%",
        gender: "men",
        shortDescription:
          " A stylish six-piece black suit, featuring a jacket, vest, pants, shirt, and pocket square, designed to keep you on top of the latest fashion trends. ",
        longDescription:
          "Step into a sophisticated and trendy look with this five-piece black suit, designed for the modern man. The set includes a tailored jacket, a matching vest, sleek pants, a crisp shirt, and a stylish pocket square. Perfect for formal events or any occasion where you want to make a sharp and fashionable statement.",
        ProductCode: "Clot-M-032",
        color: "#040102",
        colors: ["red", "blue", "black"] ,
        colorName:"Black Cherry",
      },
    ],
    3: [
      {
        img: "images/clothing29.png",
        alt: "clothing29",
        category: "Clothing",
        title: "Sweet blouse",
        price: "$40.00",
        subcategory: "blouses",
        gender: "women",
        shortDescription:
          "Cute girls' blouse with a floral half design, offering a playful and stylish look.",
        longDescription:
          "This adorable blouse for girls features a charming floral design on the top half, adding a sweet and feminine touch to any outfit. Perfect for casual outings or school days, its comfortable fit and pretty print make it an ideal choice for a fun and fashionable look.",
        ProductCode: "Clot-W-033",
        color: "#e2e7e5",
        colors: ["red", "blue", "black"] ,
        colorName:"Pale Mist",
      },
      {
        img: "images/handbag8.png",
        alt: "handbag8",
        category: "Handbag",
        title: "Modern design bag",
        price: "$60.00",
        gender: "women",
        shortDescription:
          " Trendy women's casual bag available in multiple colors, designed for a modern and stylish look. ",
        longDescription:
          "Add a touch of flair to your everyday outfits with this modern design women's bag. Available in a variety of colors, it’s the perfect accessory for casual outings. With its sleek, functional design, it offers both style and practicality, making it a versatile addition to any wardrobe.",
        ProductCode: "Hand-W-034",
        color: "#8f9796",
        colors: ["red", "blue", "black"] ,
        colorName:"Slate Gray",
      },
      {
        img: "images/glasses2.png",
        alt: "glasses2",
        category: "Glasses",
        title: "stylish sunglasses",
        price: "$55.00",
        discount: "30%",
        gender: "women",
        shortDescription:
          "Chic blue women's sunglasses with a trendy design for a bold and fashionable look. ",
        longDescription:
          "Make a statement with these stylish blue women's sunglasses, designed to combine bold fashion with functionality. The sleek frame and vibrant color offer a modern twist, while the lenses provide excellent UV protection. Perfect for adding a pop of color to your look while staying stylish under the sun.",
        ProductCode: "Glass-W-035",
        color: "#21516f",
        colors: ["red", "blue", "black"] ,
        colorName:"Teal Blue",
      },
      {
        img: "images/clothing22.png",
        alt: "clothing22",
        category: "Clothing",
        title: "Modern evening dress",
        price: "$150.00",
        subcategory: "dresses",
        gender: "women",
        shortDescription:
          "Elegant fuchsia evening dress, perfect for a modern and glamorous look at formal events. ",
        longDescription:
          "Step into the spotlight with this stunning fuchsia evening dress, designed for a chic and glamorous appearance. Ideal for formal events and soirées, it features a sleek and flattering silhouette that highlights your curves. The bold color adds a vibrant touch, making it perfect for making a memorable entrance at your next special occasion.",
        ProductCode: "Clot-W-036",
        color: "#a52652",
        colors: ["red", "blue", "black"] ,
        colorName:"Crimson Rose",
      },
      {
        img: "images/clothing36.png",
        alt: "clothing36",
        category: "Clothing",
        title: "Good quality sports tracksuit",
        price: "$110.00",
        subcategory: "sports tracksuits",
        gender: "men",
        shortDescription:
          " High-quality black men's sports tracksuit, designed for comfort and performance.",
        longDescription:
          "This black men's sports tracksuit is crafted with high-quality materials, offering both durability and comfort for your workouts or casual outings. The sleek design ensures a modern and sporty look, while the breathable fabric keeps you at ease throughout the day. Perfect for active men who value style and functionality.",
        ProductCode: "Clot-M-037",
        color: "#18171c",
        colors: ["red", "blue", "black"] ,
        colorName:"Midnight Black",
      },
      {
        img: "images/Accessories28.png",
        alt: "Accessories28",
        category: "Accessories",
        title: "Modern style ring",
        price: "$50.00",
        subcategory: "sports rings",
        discount: "40%",
        gender: "men",
        shortDescription:
          " Sleek gold men's ring with a modern design for a bold and stylish statement. ",
        longDescription:
          "Make a powerful statement with this modern gold men's ring. Designed with clean lines and a contemporary feel, it offers a bold yet sophisticated look. Perfect for adding a touch of elegance to your everyday style or for special occasions, this ring is an ideal accessory for the modern man.",
        ProductCode: "Acc-M-038",
        color: "#d9b881",
        colors: ["red", "blue", "black"] ,
        colorName:"Golden Beige",
      },
      {
        img: "images/shoes6.png",
        alt: "shoes6",
        category: "Shoes",
        title: "Latest model sports shoes",
        price: "$80.00",
        gender: "men",
        shortDescription:
          " Trendy men's sports shoes in shades of brown, inspired by the latest model for a sleek, athletic look. ",
        longDescription:
          "These men's sports shoes in various shades of brown are designed with the latest trends in mind, offering a modern and stylish appearance. Inspired by popular sneaker designs, they combine comfort and performance with a sleek, athletic aesthetic. Ideal for active men who want a fashionable yet functional shoe for sports or everyday wear.",
        ProductCode: "Sho-M-039",
        color: "#77584a",
        colors: ["red", "blue", "black"] ,
        colorName:"Warm Walnut",
      },
      {
        img: "images/glasses4.png",
        alt: "glasses4",
        category: "Glasses",
        title: "Unique sunglasses",
        price: "$60.00",
        gender: "men",
        shortDescription:
          " Unique black men's sunglasses with a bold, distinctive design for a standout look. ",
        longDescription:
          "Make a statement with these one-of-a-kind black men's sunglasses, designed to stand out with their bold and unique frame. Offering both style and excellent UV protection, these sunglasses elevate your look, whether you're out for a casual outing or making a fashionable impression. Perfect for men who want to add a touch of originality to their accessories.",
        ProductCode: "Glass-M-040",
        color: "#131312",
        colors: ["red", "blue", "black"] ,
        colorName:"Charcoal Black",
      },
      {
        img: "images/clothing20.png",
        alt: "clothing20",
        category: "Clothing",
        title: "Comfortable formal pants",
        price: "$55.00",
        subcategory: "pants",
        gender: "women",
        shortDescription:
          "Comfortable and stylish women's formal pants available in two elegant colors. ",
        longDescription:
          "These women's formal pants combine comfort with sophistication, making them perfect for both professional and formal occasions. Available in two versatile colors, they provide a flattering fit while maintaining a polished look. Crafted with soft, breathable fabric, they ensure all-day comfort without compromising on style.",
        ProductCode: "Clot-W-041",
        color: ["#c0c6c8", " #f1ceb1" ],   
        colorNames: ["Light Slate", "Soft Beige" ],  
      },
      {
        img: "images/Accessories8.png",
        alt: "Accessories8",
        category: "Accessories",
        title: "dazzling necklace",
        price: "$25.00",
        gender: "women",
        shortDescription:
          "Stunning crescent-shaped necklace with a pearl at the center, adding a touch of elegance and charm.   ",
        longDescription:
          "This dazzling necklace features a crescent moon design with a beautiful pearl at its center, exuding both elegance and mystical charm. Perfect for adding a unique and feminine touch to your outfit, it’s an ideal accessory for both casual and special occasions. A timeless piece that shines with sophistication. ",
        ProductCode: "Acc-W-042",
        color: "#dd8d50",
        colors: ["red", "blue", "black"] ,
        colorName:"Golden Pumpkin",
      },
      {
        img: "images/handbag2.png",
        alt: "handbag2",
        category: "HandBag",
        title: "Advanced bag",
        price: "$70.00",
        discount: "60%",
        gender: "women",
        shortDescription:
          " Practical and stylish women's bag designed for everyday use with a modern, functional design.  ",
        longDescription:
          "This advanced women's bag combines practicality with style, offering a spacious interior and sleek exterior for all your essentials. Designed with versatility in mind, it’s perfect for everyday use, whether for work, errands, or casual outings. The modern design and durable materials ensure it will be both a functional and fashionable addition to your wardrobe. ",
        ProductCode: "Hand-W-043",
        color: "#e9a99f",
        colors: ["red", "blue", "black"] ,
        colorName:"Soft Rose",
      },
      {
        img: "images/glasses5.png",
        alt: "glasses5",
        category: "Glasses",
        title: "luxury sunglasses",
        price: "$60.00",
        gender: "women",
        shortDescription:
          " Elegant pink luxury women's sunglasses with a chic design for a bold and fashionable look.  ",
        longDescription:
          "Elevate your style with these luxurious pink women's sunglasses, designed to make a statement. The sleek, contemporary frame and soft pink color add a feminine touch, while providing excellent UV protection. Perfect for those who want to add a touch of luxury and bold fashion to their everyday look or special occasions. ",
        ProductCode: "Glass-W-044",
        color: "#db99a5",
        colors: ["red", "blue", "black"] ,
        colorName:"Dusty Rose",
      },
      {
        img: "images/clothing35.png",
        alt: "clothing35",
        category: "Clothing",
        title: "classic shirt",
        price: "$67.00",
        subcategory: "shirts",
        gender: "men",
        shortDescription:
          " Classic dark gray men's shirt, offering a timeless and sophisticated look for any occasion.  ",
        longDescription:
          "This classic dark gray men's shirt is the perfect blend of style and sophistication. Designed for a sharp, polished appearance, it is ideal for both formal and casual events. The versatile color and timeless design make it an essential wardrobe piece, ensuring a refined look for any occasion. ",
        ProductCode: "Clot-M-045",
        color: "#525453",
        colors: ["red", "blue", "black"] ,
        colorName:"Olive Gray",
      },
      {
        img: "images/Accessories26.png",
        alt: "Accessories26",
        category: "Accessories",
        title: "Legendary Leather Belt",
        price: "$44.00",
        subcategory: "belts",
        gender: "men",
        shortDescription:
          "  Legendary men's brown leather belt, offering durability and a classic, stylish design. ",
        longDescription:
          "This legendary brown leather belt for men combines durability with a timeless design. Crafted from high-quality leather, it provides a sturdy and long-lasting fit while maintaining a sleek and polished appearance. The rich brown color makes it a versatile accessory, perfect for both casual and formal occasions. A must-have piece to add to your wardrobe for a refined, stylish look. ",
        ProductCode: "Acc-M-046",
        color: "#753e26",
        colors: ["red", "blue", "black"] ,
        colorName:"Cinnamon Brown",
      },
      {
        img: "images/clothing14.jpg",
        alt: "clothing14",
        category: "Clothing",
        title: "Black coordinated jeans",
        price: "$65.00",
        subcategory: "jeans",
        gender: "men",
        shortDescription:
          " Stylish black coordinated jeans for men, offering a sleek and versatile look for any occasion.  ",
        longDescription:
          " These black coordinated jeans for men combine style and comfort, featuring a perfect fit that enhances your silhouette. Ideal for both casual and semi-formal occasions, they can be easily paired with a variety of tops and shoes, offering endless styling possibilities. A must-have addition to any modern man’s wardrobe.",
        ProductCode: "Clot-M-047",
        color: "#181311",
        colors: ["red", "blue", "black"] ,
        colorName:"Espresso Black", 
      },
      {
        img: "images/Accessories20.png",
        alt: "Accessories20",
        category: "Accessories",
        title: "Distinctive leather watch",
        price: "$110.00",
        subcategory: "watches",
        discount: "25%",
        gender: "men",
        shortDescription:
          " Distinctive men's leather watch in dark brown, combining elegance with a bold, timeless design.  ",
        longDescription:
          "This distinctive men's leather watch features a rich dark brown leather strap and a sleek, modern design that offers both style and functionality. The sophisticated color adds a bold touch to the watch, making it ideal for formal events or daily wear. Crafted for durability and precision, this watch is perfect for those who appreciate both quality craftsmanship and timeless fashion. ",
        ProductCode: "Acc-M-048",
        color: "#825347",
        colors: ["red", "blue", "black"] ,
        colorName:"Mauve Brown",
      },
    ],
    4: [
      {
        img: "images/clothing30.png",
        alt: "clothing30",
        category: "Clothing",
        title: "Distinctive modern dress",
        price: "$100.00",
        subcategory: "dresses",
        gender: "women",
        shortDescription:
          " Chic and distinctive solid sky-blue modern dress for a fresh and stylish look.  ",
        longDescription:
          "This distinctive sky-blue dress offers a modern, clean design that’s perfect for both casual and semi-formal occasions. The solid color enhances its fresh and sophisticated appeal, making it a versatile choice for daytime outings or evening events. A must-have addition to any stylish wardrobe. ",
        ProductCode: "Clot-W-049",
        color: "#81abbc",
        colors: ["red", "blue", "black"] ,
        colorName:"Dusty Blue",
      },
      {
        img: "images/makeup14.png",
        alt: "makeup14",
        category: "MakeUp",
        title: "Long lasting bright red lipstick",
        price: "$30.00",
        gender: "women",
        shortDescription:
          " Long-lasting bright red lipstick for women, providing a bold and vibrant look that stays all day.  ",
        longDescription:
          "This long-lasting bright red lipstick is designed to provide a bold, vibrant color that stays put throughout the day. Its smooth texture ensures easy application, while the rich red shade adds a touch of sophistication and confidence to any look. Perfect for both casual and formal occasions, this lipstick offers a flawless finish that lasts, keeping your lips looking fresh and radiant. ",
        ProductCode: "Make-W-050",
        color: "#980013",
        colors: ["red", "blue", "black"] ,
        colorName:"Crimson Red",
      },
      {
        img: "images/handbag10.png",
        alt: "handbag10",
        category: "HandBag",
        title: "Creative Women's Backpack",
        price: "$77.00",
        gender: "women",
        shortDescription:
          " Creative women's backpack with a blend of three colors, offering practicality and style.  ",
        longDescription:
          "This creative women's backpack features a vibrant combination of three colors, making it a stylish and practical accessory for everyday use. With ample storage space and comfortable straps, it is designed for convenience and ease. Whether you're heading to work, school, or a day out, this backpack combines functionality with a modern and trendy look, ensuring you stay organized and fashionable at the same time. ",
        ProductCode: "Hand-W-051",
        color: "#060608",
        colors: ["red", "blue", "black"] ,
        colorName:"Midnight Black",
      },
      {
        img: "images/shoes3.png",
        alt: "shoes3",
        category: "Shoes",
        title: "Crystal Formal Shoes",
        price: "$80.00",
        discount: "10%",
        gender: "women",
        shortDescription:
          " Elegant women's crystal formal shoes with a chic heel, perfect for formal occasions.  ",
        longDescription:
          " These crystal formal shoes for women offer a sophisticated and glamorous look, featuring sparkling crystal embellishments that catch the light beautifully. With a chic heel design, they provide both style and comfort for formal events, parties, or evening occasions. The refined details and luxurious finish make them the perfect accessory to elevate any outfit, ensuring you make a dazzling impression.",
        ProductCode: "Sho-W-052",
        color: "#622716",
        colors: ["red", "blue", "black"] ,
        colorName:"Rustic Copper",
      },
      {
        img: "images/Accessories21.jpg",
        alt: "Accessories21",
        category: "Accessories",
        title: "Elegant leather watch",
        price: "$120.00",
        subcategory: "watches",
        gender: "men",
        shortDescription:
          "  Elegant men's leather watch in brown and black, combining style and sophistication. ",
        longDescription:
          "This elegant men's leather watch features a classic combination of brown and black, offering a versatile and stylish design. The high-quality leather strap ensures comfort and durability, while the sleek dial adds a sophisticated touch. Ideal for both casual and formal occasions, this watch is a perfect accessory for the modern man who values timeless elegance and functionality. ",
        ProductCode: "Acc-M-053",
        color: "#8d3e1c",
        colors: ["red", "blue", "black"] ,
        colorName:"Burnt Copper",
      },
      {
        img: "images/clothing38.png",
        alt: "clothing38",
        category: "Clothing",
        title: "Grey sports tracksuit ",
        price: "$150.00",
        subcategory: "sports tracksuits",
        gender: "men",
        shortDescription:
          "  High-quality grey and black men's sports tracksuit, designed for comfort and performance. ",
        longDescription:
          "Stay active in style with this excellent quality grey and black men's sports tracksuit. Crafted for both comfort and performance, it offers a sleek fit and durability for workouts or casual wear. The modern color combination ensures versatility, while the breathable fabric keeps you at ease throughout the day. Ideal for men who value both style and functionality in their athletic gear. ",
        ProductCode: "Clot-M-054",
        color: "#b9b8b2",
        colors: ["red", "blue", "black"] ,
        colorName:"Light Stone",
      },
      {
        img: "images/handbag7.png",
        alt: "handbag7",
        category: "HandBag",
        title: "Large size luxury leather bag",
        price: "$65.00",
        discount: "10%",
        gender: "men",
        shortDescription:
          " Large size luxury dark brown leather men's bag, combining style and functionality for a sophisticated look.  ",
        longDescription:
          "This large luxury men's leather bag in dark brown is crafted for both style and practicality. Made with high-quality leather, it offers durability and a sleek, polished appearance. The spacious design ensures ample room for all your essentials, making it ideal for work, travel, or daily use. The rich dark brown color adds a sophisticated touch, elevating your accessory collection with its timeless elegance and versatile design. ",
        ProductCode: "Hand-M-055",
        color: "#816154",
        colors: ["red", "blue", "black"] ,
        colorName:"Rustic Brown",
      },
      {
        img: "images/Accessories29.png",
        alt: "Accessories29",
        category: "Accessories",
        title: "Elegant ring",
        price: "$25.00",
        subcategory: "rings",
        gender: "men",
        shortDescription:
          " Elegant men's bronze ring, offering a timeless and sophisticated look.  ",
        longDescription:
          " This elegant bronze ring for men features a refined design that exudes sophistication and style. Perfect for adding a unique touch to any outfit, the rich bronze color enhances its timeless appeal. Whether worn for special occasions or everyday wear, this ring makes a bold yet subtle statement, elevating your accessory game with its elegant simplicity.",
        ProductCode: "Acc-M-056",
        color: "#cb9b8b",
        colors: ["red", "blue", "black"] ,
        colorName:"Warm Taupe",
      },
      {
        img: "images/makeup1.png",
        alt: "makeup1",
        category: "MakeUp",
        title: "Colorful eyeshadow palette",
        price: "$40.00",
        gender: "women",
        shortDescription:
          " Colorful eyeshadow palette for women, featuring a range of vibrant shades for endless eye-catching looks.  ",
        longDescription:
          "This colorful eyeshadow palette for women offers a wide variety of vibrant shades, allowing you to create bold, playful, or sophisticated eye makeup looks. The rich pigments provide long-lasting color, while the smooth texture ensures easy blending. Perfect for any occasion, this palette lets you experiment with different styles, from everyday natural looks to dramatic, festive eye-catching designs. A must-have for any makeup lover who enjoys exploring new, creative looks. ",
        ProductCode: "Make-W-057",
        color: "#bda98e",
        colors: ["red", "blue", "black"] ,
        colorName:"Light Taupe",
      },
      {
        img: "images/shoes8.png",
        alt: "shoes8",
        category: "Shoes",
        title: "Comfortable low heel shoe",
        price: "$75.00",
        discount: "10%",
        gender: "women",
        shortDescription:
          "Comfortable women's low heel shoes, offering style and support with a small, practical heel. ",
        longDescription:
          "These comfortable women's low heel shoes feature a small, practical heel that offers just the right amount of lift while ensuring comfort for all-day wear. The elegant design makes them versatile for both casual and semi-formal occasions, providing a chic look without compromising on comfort. Perfect for those who want style with ease, these shoes are ideal for office wear, events, or everyday use. ",
        ProductCode: "Sho-W-058",
        color: "#897a75",
        colors: ["red", "blue", "black"] ,
        colorName:"Warm Stone",
      },
      {
        img: "images/clothing17.png",
        alt: "clothing17",
        category: "Clothing",
        title: "Gorgeous short dress",
        price: "$150.00",
        subcategory: "dresses",
        gender: "women",
        shortDescription:
          " Stunning short dress in deep purple with a unique, unconventional cut for a bold and fashionable look.  ",
        longDescription:
          "This gorgeous short dress in a rich indigo purple features an eye-catching, unconventional design that sets it apart from the rest. The unique cut creates a flattering and daring silhouette, making it perfect for those looking to make a bold fashion statement. Ideal for parties, night outs, or any occasion where you want to stand out with style. ",
        ProductCode: "Clot-W-059",
        color: "#5b3551",
        colors: ["red", "blue", "black"] ,
        colorName:"Plum Brown",
      },
      {
        img: "images/Accessories12.png",
        alt: "Accessories12",
        category: "Accessories",
        title: "Distinctive neck necklace",
        price: "$35.00",
        gender: "women",
        shortDescription:
          "  Distinctive necklace featuring a soft blue bead, offering a chic and elegant touch. ",
        longDescription:
          "This distinctive necklace showcases a delicate soft blue bead, adding a subtle pop of color to its elegant design. Perfect for both casual and formal occasions, it offers a refined and sophisticated look. The simple yet chic style makes it a versatile accessory, easily complementing a variety of outfits while enhancing your overall appearance. ",
        ProductCode: "Acc-W-060",
        color: "#dec5aa",
        colors: ["red", "blue", "black"] ,
        colorName:"Light Golden",
      },
      {
        img: "images/clothing39.png",
        alt: "clothing39",
        category: "Clothing",
        title: "Modern cut shirt",
        price: "$70.00",
        subcategory: "shirts",
        gender: "men",
        shortDescription:
          " Stylish men's shirt in light blue with a modern cut for a sleek, contemporary look.  ",
        longDescription:
          "This light blue men's shirt is designed with a modern cut that provides a sharp, tailored fit. Perfect for both casual and semi-formal occasions, it combines comfort with contemporary style. The versatile color and sleek design make it a must-have for a fashionable and polished appearance. ",
        ProductCode: "Clot-M-061",
        color: "#c4d2d5",
        colors: ["red", "blue", "black"] ,
        colorName:"Pale Gray",
      },
      {
        img: "images//clothing33.png",
        alt: "clothing33",
        category: "Clothing",
        title: "Excellent silicone pants",
        price: "$66.00",
        subcategory: "pants",
        gender: "men",
        shortDescription:
          " High-quality khaki silicone pants for men, offering comfort and durability with a modern design.  ",
        longDescription:
          "These excellent khaki silicone pants for men are crafted for both comfort and style. Made from durable, high-quality silicone material, they provide a unique feel and flexibility. The modern cut and versatile color make them a perfect choice for both casual and semi-formal occasions, offering a sleek and practical look. ",
        ProductCode: "Clot-M-062",
        color: "#dab77a",
        colors: ["red", "blue", "black"] ,
        colorName:"Honey Yellow",
      },
      {
        img: "images/shoes9.png",
        alt: "shoes9",
        category: "Shoes",
        title: "Comfortable sports boots",
        price: "$95.00",
        gender: "men",
        shortDescription:
          " Comfortable men's sports boots in black and brown, designed for durability and style.  ",
        longDescription:
          "These comfortable men's sports boots in black and brown offer a perfect combination of durability, support, and style. Designed for active wear, they provide excellent traction and comfort, making them ideal for sports, outdoor activities, or casual wear. The modern design and versatile color scheme ensure they complement various outfits, while the sturdy construction ensures long-lasting wear. ",
        ProductCode: "Sho-M-063",
        color: "#23292a",
        colors: ["red", "blue", "black"] ,
        colorName:"Slate Gray",
      },
      {
        img: "images/Accessories30.png",
        alt: "Accessories30",
        category: "Accessories",
        title: "Distinctive gold plated rings set",
        price: "$40.00",
        subcategory: "rings",
        discount: "35%",
        gender: "men",
        shortDescription:
          "  Distinctive men's gold-plated ring set featuring four rings, designed for a bold and fashionable look. ",
        longDescription:
          "This distinctive men's gold-plated ring set includes four rings, each offering a unique design to elevate your style. Crafted with attention to detail, the rings are made from durable materials with a luxurious gold-plated finish. Perfect for adding a bold and sophisticated touch to any outfit, this set is ideal for those looking to make a statement with their accessories. ",
        ProductCode: "Acc-M-064",
        color: "#dcac55",
        colors: ["red", "blue", "black"] ,
        colorName:"Goldenrod",
      },
    ],
    5: [
      {
        img: "images/Accessories6.png",
        alt: "Accessories6",
        category: "Accessories",
        title: "Elegant anklet",
        price: "$25.00",
        gender: "women",
        shortDescription:
          " Elegant gold women's anklet with a pink accent, adding a feminine and stylish touch.  ",
        longDescription:
          "This elegant gold anklet for women features a beautiful pink accent, offering a delicate and sophisticated look. Perfect for adding a subtle yet chic detail to your outfit, it enhances your style with its feminine design. Ideal for casual or special occasions, this anklet adds a refined touch to any ensemble, making it a must-have accessory for every fashion lover. ",
        ProductCode: "Acc-W-065",
        color: "#875c4d",
        colors: ["red", "blue", "black"] ,
        colorName:"Chestnut Brown",
      },
      {
        img: "images/clothing13.jpg",
        alt: "clothing13",
        category: "Clothing",
        title: "Modern design skirt",
        price: "$60.00",
        subcategory: "skirts",
        gender: "women",
        shortDescription:
          " Chic two-tone skirt with a modern design, featuring buttons down the center for a unique and stylish look.  ",
        longDescription:
          "This stylish two-tone skirt offers a modern and distinctive design, with a clean and sleek appearance. Featuring buttons down the center, it adds an element of sophistication and versatility. The unique cut and design make it a perfect choice for those looking for something different and fashionable, ideal for both casual and semi-formal occasions. ",
        ProductCode: "Clot-W-066",
        color: ["#c2663c", " #feca56"],   
        colorNames: ["Copper Orange", "Golden Yellow"], // أسماء الألوان
        
      },
      {
        img: "images/clothing21.png",
        alt: "clothing21",
        category: "Clothing",
        title: " Striped blouse",
        price: "$55.00",
        gender: "women",
        shortDescription:
          " Charming striped women's blouse with a flattering fit for a casual yet stylish look.  ",
        longDescription:
          "This trendy striped blouse for women combines a classic pattern with a modern fit, offering both comfort and style. Its versatile design makes it perfect for a casual day out or even for office wear. The soft fabric and flattering silhouette add to its timeless appeal, making it a great addition to any wardrobe. ",
        ProductCode: "Clot-W-067",
        color: "#aa8780",
        colors: ["red", "blue", "black"] ,
        colorName:"Dusty Rose",
      },
      {
        img: "images/handbag1.png",
        alt: "handbag1",
        category: "HandBag",
        title: "Fashionable bag",
        price: "$60.00",
        discount: "30%",
        gender: "women",
        shortDescription:
          " Fashionable women's beige bag, offering a chic and versatile accessory for any occasion.  ",
        longDescription:
          "This fashionable women's bag in beige combines style and practicality, making it the perfect accessory for everyday use. The neutral color ensures it pairs effortlessly with various outfits, while the spacious interior provides ample room for essentials. Whether for work, a casual day out, or evening events, this chic bag adds a refined touch to your look, offering both elegance and functionality. ",
        ProductCode: "Hand-W-068",
        color: "#a37261",
        colors: ["red", "blue", "black"] ,
        colorName:"Cinnamon Brown",
      },
      {
        img: "images/Accessories23.png",
        alt: "Accessories23",
        category: "Accessories",
        title: "Modern elegant blue watch",
        price: "$70.00",
        subcategory: "watches",
        gender: "men",
        shortDescription:
          "Modern and elegant men's blue watch, combining sleek design with functionality for a sophisticated look.  ",
        longDescription:
          "This modern men's blue watch offers a sleek and elegant design that enhances any outfit. The rich blue dial and sophisticated details provide a stylish yet functional timepiece, perfect for both formal and casual occasions. With its high-quality materials and precision, this watch is the ideal accessory for the fashion-forward man who values both style and performance. ",
        ProductCode: "Acc-M-069",
        color: "#0f2d43",
        colors: ["red", "blue", "black"] ,
        colorName:"Midnight Blue",
      },
      {
        img: "images/clothing9.jpg",
        alt: "clothing9",
        category: "Clothing",
        title: "Full formal suit excellent material",
        price: "$150.00",
        subcategory: "suit",
        discount: "30%",
        gender: "men",
        shortDescription:
          "Elegant five-piece blue formal suit made from excellent material, including a jacket, vest, shirt, pants, and pocket square.   ",
        longDescription:
          " Step into sophistication with this five-piece blue formal suit, crafted from high-quality material for a refined look. The set includes a well-tailored jacket, matching pants, a stylish vest, a crisp shirt, and a coordinating pocket square. Perfect for formal events, business occasions, or weddings, this suit ensures you make a sharp and memorable impression.",
        ProductCode: "Clot-M-070",
        color: "#385977",
        colors: ["red", "blue", "black"] ,
        colorName:"Teal Blue",
      },
      {
        img: "images/shoes11.png",
        alt: "shoes11",
        category: "Shoes",
        title: "Strange color formal shoes",
        price: "$60.00",
        gender: "men",
        shortDescription:
          "  Unique color formal men's shoes, offering a bold and distinctive look for any formal occasion. ",
        longDescription:
          "These formal men's shoes in a strange, eye-catching color break away from traditional styles, making a bold statement at any event. Crafted for both comfort and elegance, they offer a sleek design with high-quality materials. Ideal for those who want to stand out, these shoes combine sophisticated craftsmanship with a touch of personality, perfect for weddings, parties, or business events. ",
        ProductCode: "Sho-M-071",
        color: "#712011",
        colors: ["red", "blue", "black"] ,
        colorName:"Brick Red",
      },
      {
        img: "images/handbag4.png",
        alt: "handbag4",
        category: "HandBag",
        title: "Large thick leather bag",
        price: "$75.00",
        gender: "men",
        shortDescription:
          " Large, thick brown leather men's bag, designed for durability and style with ample space for all essentials.  ",
        longDescription:
          " This large, thick brown leather men's bag is crafted from high-quality leather for durability and a rich, sophisticated look. The spacious interior ensures you can carry everything you need while maintaining a polished and professional appearance. Whether for work, travel, or daily use, this bag offers both functionality and style, with a rugged yet refined design that makes it a must-have accessory for the modern man",
        ProductCode: "Hand-M-072",
        color: "#6a2a1e",
        colors: ["red", "blue", "black"] ,
        colorName:"Deep Chestnut",
      },
      {
        img: "images/clothing23.png",
        alt: "clothing23",
        category: "Clothing",
        title: "Long lace dress",
        price: "$240.00",
        subcategory: "dresses",
        discount: "15%",
        gender: "women",
        shortDescription:
          " Elegant black lace dress, perfect for evening events and parties, offering a sophisticated and timeless look.  ",
        longDescription:
          " This stunning black lace dress combines timeless elegance with modern sophistication, making it the perfect choice for evening events or special occasions. The delicate lace fabric creates a flattering silhouette, while the long design adds an extra touch of class. Ideal for formal parties, galas, or a night out, this dress ensures you stand out in style.",
        ProductCode: "Clot-W-073",
        color: "#1d1717",
        colors: ["red", "blue", "black"] ,
        colorName:"Deep Charcoal",
      },
      {
        img: "images/Accessories11.jpg",
        alt: "Accessories11",
        category: "Accessories",
        title: "Luxury Ring Set",
        price: "$70.00",
        gender: "women",
        shortDescription:
          " Luxury women's ring set featuring four gold-plated rings, offering a refined and elegant touch.  ",
        longDescription:
          "This luxurious set of four gold-plated rings for women combines elegance and style, with each ring designed to complement various looks. Perfect for adding a chic and sophisticated touch to any outfit, these rings provide versatility and timeless beauty. Ideal for special occasions or everyday wear, this set elevates your accessory collection with its polished and refined appearance. ",
        ProductCode: "Acc-W-074",
        color: "#e2c29f",
        colors: ["red", "blue", "black"] ,
        colorName:"Sandstone",
      },
      {
        img: "images/clothing6.jpg",
        alt: "clothing6",
        category: "Clothing",
        title: "elegant mini skirt",
        price: "$44.00",
        subcategory: "skirts",
        gender: "women",
        shortDescription:
          " Chic and elegant mini skirt, perfect for a fashionable and trendy look.  ",
        longDescription:
          "This elegant mini skirt offers a sleek and stylish design, ideal for creating a fashionable outfit. Its flattering fit and versatile style make it suitable for both casual and semi-formal occasions. Whether paired with a blouse for a sophisticated look or a casual top for a laid-back vibe, this mini skirt is a wardrobe essential for every fashion-forward individual. ",
        ProductCode: "Clot-W-075",
        color: "#42626f",
        colors: ["red", "blue", "black"] ,
        colorName:"Stormy Blue",
      },
      {
        img: "images/Accessories18.png",
        alt: "Accessories18",
        category: "Accessories",
        title: "Bracelet with a distinctive blue stone",
        price: "$50.00",
        gender: "women",
        shortDescription:
          " Elegant women's bracelet featuring a distinctive blue stone, adding a pop of color and sophistication.  ",
        longDescription:
          "This beautiful women's bracelet showcases a striking blue stone at its center, offering a unique and eye-catching design. The delicate band enhances the stone’s brilliance, making it the perfect accessory to elevate any outfit. Whether for casual wear or special occasions, this bracelet adds a sophisticated touch with its timeless beauty. ",
        ProductCode: "Acc-W-076",
        color: "#c0bcbf",
        colors: ["red", "blue", "black"] ,
        colorName:"Soft Silver",
      },
      {
        img: "images/Accessories27.png",
        alt: "Accessories27",
        category: "Accessories",
        title: "Strong leather belt",
        price: "$70.00",
        subcategory: "Belts",
        gender: "men",
        shortDescription:
          "Durable brown leather belt for men, crafted for strength and style.   ",
        longDescription:
          "This strong brown leather belt for men is designed for both durability and style. Made from high-quality leather, it offers a sturdy, long-lasting fit while adding a refined touch to your outfit. Perfect for both casual and formal occasions, this versatile belt ensures comfort and style, making it an essential addition to your wardrobe. ",
        ProductCode: "Acc-M-077",
        color: "#923713",
        colors: ["red", "blue", "black"] ,
        colorName:"Brick Red",
        
      },
      {
        img: "images/clothing37.png",
        alt: "clothing37",
        category: "Clothing",
        title: "New jeans",
        price: "$60.00",
        subcategory: "jeans",
        gender: "men",
        shortDescription:
          " Stylish new blue jeans for men, offering a modern fit and timeless appeal.  ",
        longDescription:
          "These new blue jeans for men feature a sleek, modern fit with a versatile design that suits any casual or semi-casual occasion. Made with high-quality denim, they provide both comfort and durability. The classic blue color makes them easy to pair with various outfits, ensuring you stay stylish and comfortable all day long. ",
        ProductCode: "Clot-M-078",
        color: "#2a3a47",
        colors: ["red", "blue", "black"] ,
        colorName:"Steel Blue",
      },
      {
        img: "images/clothing40.png",
        alt: "clothing40",
        category: "Clothing",
        title: "Men's full-length new story",
        price: "$160.00",
        subcategory: "sports tracksuits",
        gender: "men",
        shortDescription:
          " New story men's full-length pants in dark navy, offering a sleek and modern look.  ",
        longDescription:
          "These men's full-length pants in dark navy offer a stylish and sophisticated fit, perfect for both casual and semi-formal occasions. Crafted with attention to detail, they provide comfort, durability, and a modern silhouette. Their versatile color and clean design make them easy to pair with a variety of outfits for a sharp and polished appearance. ",
        ProductCode: "Clot-M-079",
        color: "#353849",
        colors: ["red", "blue", "black"] ,
        colorName:"Charcoal Blue",
      },
      {
        img: "images/Accessories31.png",
        alt: "Accessories31",
        category: "Accessories",
        title: "Elegant silver rings set",
        price: "$330.00",
        subcategory: "rings",
        discount: "40%",
        gender: "men",
        shortDescription:
          " Elegant men's silver rings set featuring five rings, offering a refined and stylish touch for any occasion.  ",
        longDescription:
          "This exquisite set of five men's silver rings combines elegance and versatility. Each ring is designed with a unique style, providing a sophisticated yet modern look. Crafted from high-quality silver, these rings are perfect for adding a stylish accent to any outfit, whether for formal events or casual wear. A timeless accessory collection for the fashion-forward man. ",
        ProductCode: "Acc-M-080",
        color: "#d1d6d4",
        colors: ["red", "blue", "black"] ,
        colorName:"Light Ash Gray",
      },
    ],
    6: [
      {
        img: "images/clothing1.png",
        alt: "clothing1",
        category: "Clothing",
        title: "Elegant blouse",
        price: "$55.00",
        subcategory: "blouses",
        gender: "women",
        shortDescription:
          " Elegant women's blouse featuring a bow detail at the center for a chic and sophisticated look.  ",
        longDescription:
          "This elegant women's blouse combines timeless style with modern femininity. The delicate bow at the center adds a charming touch, making it perfect for both casual and formal occasions. The soft fabric and flattering fit ensure comfort, while the stylish design elevates any outfit for a polished, chic appearance. ",
        ProductCode: "Clot-W-081",
        color: "#4a8192",
        colors: ["red", "blue", "black"] ,
        colorName:"Ocean Breeze",
      },
      {
        img: "images/makeup6.png",
        alt: "makeup6",
        category: "MakeUp",
        title: "Waterproof mascara brand",
        price: "$40.00",
        gender: "women",
        shortDescription:
          " Waterproof mascara for women, providing long-lasting volume and definition without smudging.  ",
        longDescription:
          "This waterproof mascara offers excellent durability, ensuring your lashes stay voluminous and defined throughout the day, no matter the weather. Designed to resist smudging or flaking, it provides a flawless finish that lasts, even in humid or rainy conditions. With its easy-to-apply formula, it enhances your lashes, giving them a bold, dramatic look, perfect for any occasion. A must-have for those who want long-lasting, beautiful lashes all day. ",
        ProductCode: "Make-W-082",
        color: "#030303",
        colors: ["red", "blue", "black"] ,
        colorName:"Pure Black",
      },
      {
        img: "images/handbag6.png",
        alt: "handbag6",
        category: "HandBag",
        title: "Elegant spacious bag",
        price: "$70.00",
        discount: "35%",
        gender: "women",
        shortDescription:
          " Elegant large women's bag, offering ample space and a sophisticated design for any occasion. ",
        longDescription:
          " This elegant large women's bag combines style and practicality, providing a spacious interior to carry all your essentials while maintaining a chic and polished look. The sophisticated design ensures it complements both formal and casual outfits, making it versatile for work, travel, or daily use. Crafted with attention to detail, this bag adds a refined touch to your wardrobe, offering both elegance and functionality.",
        ProductCode: "Hand-W-083",
        color: "#cfc2b2",
        colors: ["red", "blue", "black"] ,
        colorName:"Pale Taupe",
      },
      {
        img: "images/shoes12.png",
        alt: "shoes3",
        category: "Shoes",
        title: "women's poster shoes",
        price: "$80.00",
        gender: "women",
        shortDescription:
          " Practical khaki women's poster shoes, offering comfort and style for everyday wear.  ",
        longDescription:
          "These practical khaki women's poster shoes are designed for comfort and style, making them perfect for daily use. The versatile color pairs easily with a variety of outfits, while the sturdy construction ensures durability and long-lasting wear. Whether you're running errands or enjoying a casual day out, these shoes provide the perfect balance of practicality and fashion, making them an essential addition to your wardrobe. ",
        ProductCode: "Sho-W-084",
        color: "#c9511f",
        colors: ["red", "blue", "black"] ,
        colorName:"Burnt Orange",
      },
      {
        img: "images/clothing34.png",
        alt: "clothing34",
        category: "Clothing",
        title: " Comfortable sportswear",
        price: "$150.00",
        subcategory: "sports tracksuits",
        gender: "men",
        shortDescription:
          " Comfortable men's sportswear in a sleek white and black design, ideal for active wear and casual outings.  ",
        longDescription:
          " This men's sportswear set in white and black offers a blend of comfort and style. Made with breathable fabric, it ensures maximum comfort during workouts or casual activities. The modern color combination and relaxed fit make it a versatile choice for both athletic and casual wear, providing a sleek and functional look for active men.",
        ProductCode: "Clot-M-085",
        color: "#18171e",
        colors: ["red", "blue", "black"] ,
        colorName:"Midnight Black",
      },
      {
        img: "images/Accessories32.png",
        alt: "Accessories32",
        category: "Accessories",
        title: "Silver Rings Set",
        price: "$50.00",
        subcategory: "rings",
        gender: "men",
        shortDescription:
          " Men's silver rings set featuring three stylish rings, offering versatility and modern elegance.  ",
        longDescription:
          "This men's silver rings set includes three distinct rings, each with a modern design that complements various styles. Perfect for those who enjoy adding a touch of sophistication and individuality to their look, these rings offer versatility and are suitable for both casual and formal occasions. Made from high-quality silver, they provide durability and timeless appeal. ",
        ProductCode: "Acc-M-086",
        color: "#a29e92",
        colors: ["red", "blue", "black"] ,
        colorName:"Warm Gray",
      },
      {
        img: "images/shoes1.png",
        alt: "shoes1",
        category: "Shoes",
        title: "Light brown sporty boots",
        price: "$65.00",
        gender: "men",
        shortDescription:
          " Light brown sporty men's boots, designed for comfort and style, perfect for casual and outdoor wear.  ",
        longDescription:
          "These light brown sporty men's boots offer a perfect blend of comfort, style, and durability. Designed for both outdoor activities and casual wear, they provide excellent support with a modern, sporty look. The high-quality materials ensure long-lasting wear, while the lightweight design makes them ideal for all-day use. Whether you're out for a hike or just enjoying a day in the city, these boots provide both practicality and a sleek, fashionable appearance. ",
        ProductCode: "Sho-M-087",
        color: "#805a48",
        colors: ["red", "blue", "black"] ,
        colorName:"Chestnut Brown",
      },
      {
        img: "images/clothing41.png",
        alt: "clothing11",
        category: "Clothing",
        title: "Fire material shirt",
        price: "$70.00",
        subcategory: "shirts",
        discount: "10%",
        gender: "men",
        shortDescription:
          " Men's shirt made with fire-resistant material, featuring a stylish grey and brown design for a functional and fashionable look.  ",
        longDescription:
          "This men's shirt combines safety and style, crafted from fire-resistant material to offer protection while maintaining a sleek, modern design. The grey and brown color combination adds a unique touch, making it perfect for both work and casual settings. Durable and functional, this shirt provides both comfort and peace of mind without compromising on style. ",
        ProductCode: "Clot-M-088",
        color: "#232932",
        colors: ["red", "blue", "black"] ,
        colorName:"Charcoal Gray",
      },
      {
        img: "images/Accessories9.jpg",
        alt: "Accessories9",
        category: "Accessories",
        title: "Exceptional ring",
        price: "$35.00",
        subcategory: "rings",
        gender: "women",
        shortDescription:
          " Exceptional women's gold accessory ring with a pearl, offering a blend of elegance and sophistication.  ",
        longDescription:
          "This exceptional women's ring combines a luxurious gold band with a beautiful pearl at its center, creating a perfect blend of elegance and charm. The stunning design adds a refined touch to any outfit, making it ideal for both formal and casual occasions. A timeless accessory that enhances your look with its classic yet contemporary appeal. ",
        ProductCode: "Acc-W-089",
        color: "#e7b980",
        colors: ["red", "blue", "black"] ,
        colorName:"Golden Apricot",
      },
      {
        img: "images/makeup10.png",
        alt: "makeup10",
        category: "MakeUp",
        title: "Innovative blusher",
        price: "$44.00",
        discount: "35%",
        gender: "women",
        shortDescription:
          " Innovative fuchsia blusher, providing a vibrant and fresh flush of color for a radiant look.  ",
        longDescription:
          "This innovative fuchsia blusher offers a bold pop of color, perfect for creating a vibrant and youthful glow. Its smooth formula blends effortlessly into the skin, delivering a natural-looking flush that enhances your complexion. Ideal for any occasion, this blusher adds a fresh and radiant finish, allowing you to experiment with your makeup and achieve a bright, glowing look. ",
        ProductCode: "Make-W-090",
        color: "#ab333e",
        colors: ["red", "blue", "black"] ,
        colorName:"Ruby Red",
      },
      {
        img: "images/clothing2.png",
        alt: "clothing2",
        category: "Clothing",
        title: "Comfortable and beautiful blouse",
        price: "$60.00",
        subcategory: "blouses",
        gender: "women",
        shortDescription:
          " Comfortable and beautiful women's blouse with a tie detail at the sleeves for a chic touch.  ",
        longDescription:
          "This women's blouse combines elegance with comfort, featuring a flattering fit and a stylish tie detail at the sleeves. Perfect for both casual and semi-formal occasions, it offers a feminine touch while providing all-day comfort. The versatile design allows for easy pairing with jeans, skirts, or trousers, making it a great addition to any wardrobe. ",
        ProductCode: "Clot-W-091",
        color: "#c54e4c",
        colors: ["red", "blue", "black"] ,
        colorName:"Coral Red",
      },
      {
        img: "images/clothing28.png",
        alt: "clothing28",
        category: "Clothing",
        title: "Stunning formal pants",
        price: "$50.00",
        subcategory: "pants",
        discount: "35%",
        gender: "women",
        shortDescription:
          "  Stunning grey formal women's pants, offering a polished and sophisticated look for any professional setting. ",
        longDescription:
          "These stunning grey formal pants for women are designed for a sleek, tailored fit that exudes professionalism and elegance. Crafted with high-quality fabric, they offer both comfort and durability, making them perfect for office wear, meetings, or formal events. The classic grey color ensures versatility, allowing them to be paired with a variety of blouses or blazers for a refined, polished appearance. ",
        ProductCode: "Clot-W-092",
        color: "#87877c",
        colors: ["red", "blue", "black"] ,
        colorName:"Olive Gray",
      },
      {
        img: "images/Accessories33.png",
        alt: "Accessories33",
        category: "Accessories",
        title: "Distinctive ring",
        price: "$30.00",
        subcategory: "rings",
        gender: "men",
        shortDescription:
          "  Distinctive men's silver ring with a square diamond at the center, combining elegance and style. ",
        longDescription:
          "This distinctive men's silver ring features a stunning square diamond at the center, offering a sophisticated and bold look. The high-quality silver band complements the diamond's brilliance, making it the perfect accessory for formal events or adding a touch of elegance to everyday wear. A timeless piece that exudes class and luxury ",
        ProductCode: "Acc-M-093",
        color: "#9d9a92",
        colors: ["red", "blue", "black"] ,
        colorName:"Olive Gray",
      },
      {
        img: "images/clothing42.png",
        alt: "clothing42",
        category: "Clothing",
        title: "Men's three-color comfortable  ",
        price: "$190.00",
        subcategory: "sports tracksuits",
        gender: "men",
        shortDescription:
          "  Comfortable men's three-color sports shoes in orange, designed for style and performance. ",
        longDescription:
          "These men's three-color sports shoes in vibrant orange are crafted for both comfort and performance. Designed with a modern, sporty aesthetic, they offer excellent support and flexibility for active use. The combination of colors adds a dynamic touch, making them perfect for workouts or casual wear, ensuring you stay stylish and comfortable throughout the day. ",
        ProductCode: "Clot-M-094",
        color: "#86817c",
        colors: ["red", "blue", "black"] ,
        colorName:"Warm Taupe",
      },
      {
        img: "images/handbag11.png",
        alt: "handbag11",
        category: "HandBag",
        title: "Large men's bag, excellent material",
        price: "$63.00",
        gender: "men",
        shortDescription:
          " Large men's bag in navy and brown, made from excellent material, featuring two sturdy straps for a practical and stylish look.  ",
        longDescription:
          "This large men's bag in a sophisticated navy and brown combination is crafted from high-quality material, ensuring durability and style. Designed for practicality, it features two sturdy straps for easy carrying and ample space for all your essentials. Perfect for daily use, travel, or work, this bag offers a versatile, polished look while keeping your belongings organized and secure. ",
        ProductCode: "Hand-M-095",
        color: "#666465",
        colors: ["red", "blue", "black"] ,
        colorName:"Olive Gray",
      },
      {
        img: "images/Accessories34.png",
        alt: "Accessories34",
        category: "Accessories",
        title: "Latest model men's watch",
        price: "$100.00",
        subcategory: "watches",
        gender: "men",
        shortDescription:
          " Sleek and modern black men's watch, featuring the latest design for a sophisticated and functional look.  ",
        longDescription:
          "This latest model men's watch in black combines style and functionality, offering a sleek, modern design that's perfect for any occasion. The sophisticated black color gives it a timeless appeal, while the high-quality materials ensure durability and accuracy. Ideal for both formal and casual wear, this watch is the perfect accessory to complete your look. ",
        ProductCode: "Acc-M-096",
        color: "#00010a",
        colors: ["red", "blue", "black"] ,
        colorName:"Midnight Black",
      },
    ],
  };
  
  document.addEventListener("DOMContentLoaded", function () {
    let savedCart = localStorage.getItem("shoppingCart");
    let savedCart1 = localStorage.getItem("cart");
if (savedCart1) {
    cart = JSON.parse(savedCart);
}

    if (savedCart) {
        shoppingCart = JSON.parse(savedCart);
        displayCartItems(); // تحديث العرض بعد تحميل البيانات المحفوظة
        updateCartIconCount(); // تحديث العدد في أيقونة الكارت
        
    }
});


function findProductById(productId) {
    console.log("Finding product with ID:", productId);
    let allProducts = Object.values(products).flat(); // تحويل الكائن إلى مصفوفة واحدة
    let foundProduct = allProducts.find(item => item.ProductCode === productId);
    console.log("Found product:", foundProduct);
    return foundProduct;
}

let totalCartItemsCount = 0;  // عدد العناصر في السلة
let totalWishlistItemsCount = 0;  // عدد العناصر في الـ Wishlist

let shoppingCart = {
    items: [], // مصفوفة لتخزين العناصر المضافة إلى السلة
    totalPrice: 0 // لحساب السعر الإجمالي
};

function getProductIdFromEvent(event) {
    let productElement = event.target.closest("[data-product-id]");
    let productId = productElement ? productElement.dataset.productId : null;
    console.log("Product ID from event:", productId);
    return productId;
}

function toggleCart() {
  const cartContainer = document.getElementById("cart-dropdown");
  if (cartContainer) {
      cartContainer.classList.toggle("visible");
  }
}
function addProductToCart(event) {
  console.log("Adding product to cart");
  let productId = getProductIdFromEvent(event);
  if (!productId) {
      console.error("❌ لم يتم العثور على معرف المنتج.");
      return;
  }

  let savedCart = localStorage.getItem("cart");
  let savedShoppingCart = localStorage.getItem("shoppingCart");

  let cart = savedCart ? JSON.parse(savedCart) : { items: [], totalPrice: 0 };
  let shoppingCart = savedShoppingCart ? JSON.parse(savedShoppingCart) : { items: [], totalPrice: 0 };

  let product = findProductById(productId);
  if (!product) {
      console.error("❌ المنتج غير موجود في القائمة.");
      return;
  }

  let existingProductInCart = cart.items.find(item => item.ProductCode === productId);
  let existingProductInShoppingCart = shoppingCart.items.find(item => item.ProductCode === productId);

  let selectedQuantity = 1; // الافتراضي عند الإضافة
  let priceValue = parseFloat(product.price.replace("$", ""));

  if (existingProductInCart) {
      existingProductInCart.quantity += selectedQuantity;
  } else {
      cart.items.push({ ...product, quantity: selectedQuantity });
  }

  if (existingProductInShoppingCart) {
      existingProductInShoppingCart.quantity += selectedQuantity;
  } else {
      shoppingCart.items.push({ ...product, quantity: selectedQuantity });
  }

  cart.totalPrice += priceValue * selectedQuantity;
  shoppingCart.totalPrice += priceValue * selectedQuantity;

  // ✅ التأكد من أن السعر لا يصبح سالبًا
  cart.totalPrice = Math.max(cart.totalPrice, 0);
  shoppingCart.totalPrice = Math.max(shoppingCart.totalPrice, 0);

  // تحديث LocalStorage
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));

  // ✅ تحديث العرض
  updateCartBadge();
  displayCartItems();
  updateCartSubtotal();

  updateCartIconCount();
  animateProductToCart(event);
}



function displayCartItems() {  
  let cartContainer = document.getElementById("cart-items-container");

  if (!cartContainer) {
      console.error("❌ العنصر cart-items-container غير موجود في الـ DOM");
      return;
  }

  // 🔥 تحديث shoppingCart من LocalStorage مباشرة
  let savedShoppingCart = localStorage.getItem("shoppingCart");
  let shoppingCart = savedShoppingCart ? JSON.parse(savedShoppingCart) : { items: [], totalPrice: 0 };

  cartContainer.innerHTML = ""; // تنظيف المحتوى قبل الإضافة

  if (shoppingCart.items.length === 0) {
      cartContainer.innerHTML = "<p id='empty-cart-message'>No product in the cart</p>";
  } else {
      shoppingCart.items.forEach(item => {
          let priceValue = parseFloat(item.price.replace("$", ""));  
          let cartItemElement = document.createElement("div");  
          cartItemElement.classList.add("cart-item");
          cartItemElement.innerHTML = `
              <img src="${item.img}" alt="${item.title}">
              <div class="cart-item-details">
                  <div class="cart-item-name">${item.title}</div>
                  <div class="cart-item-price"><span>${item.quantity} ×</span> $${priceValue.toFixed(2)}</div>
              </div>
              <button class="cart-item-remove" onclick="removeFromCart('${item.ProductCode}')">&times;</button>
          `;
          cartContainer.appendChild(cartItemElement);
      });
  }

  // تحديث إجمالي السلة
  let cartSubtotal = shoppingCart.totalPrice.toFixed(2);
  let subtotalElement = document.getElementById("cart-subtotal");
  if (subtotalElement) {
      subtotalElement.textContent = `$${cartSubtotal}`;
  }
}

function updateCartIconCount() {
  let cartIcon = document.getElementById("cart-icon");
  let cartBadge = cartIcon.querySelector(".badge");

  if (!cartBadge) {
      cartBadge = document.createElement("span");
      cartBadge.classList.add("badge");
      cartIcon.appendChild(cartBadge);
  }

  let savedShoppingCart = localStorage.getItem("shoppingCart");
  let shoppingCart = savedShoppingCart ? JSON.parse(savedShoppingCart) : { items: [], totalPrice: 0 };

  let totalCartItemsCount = shoppingCart.items.reduce((total, item) => total + item.quantity, 0);

  cartBadge.textContent = totalCartItemsCount > 0 ? totalCartItemsCount : 0;
}


function calculateTotalPrice() {
    console.log("Calculating total price");
    return shoppingCart.items.reduce((total, item) => {
        let priceValue = parseFloat(item.price.replace("$", ""));
        return total + priceValue * item.quantity;
    }, 0);
}

 
 

function animateProductToCart(event) {
 
  let cartIcon = document.getElementById("cart-icon");
  if (!cartIcon) {
      console.error("❌ لم يتم العثور على أيقونة السلة.");
      return;
  }

  // إيجاد صورة المنتج
  let productImage = event.target.closest(".image").querySelector("img");

  if (!productImage) {
      console.error("❌ لم يتم العثور على صورة المنتج.");
      return;
  }

 

  // إنشاء صورة جديدة للطيران
  let flyingImg = productImage.cloneNode(true);
  flyingImg.style.position = "absolute";
  flyingImg.style.zIndex = "1000";  // تأكد من أن الصورة فوق العناصر الأخرى
  flyingImg.style.width = "80px";   // تأكد من أن حجم الصورة مناسب
  flyingImg.style.height = "80px";  // تأكد من أن حجم الصورة مناسب
  flyingImg.style.transition = "all 1s ease-in-out";
  flyingImg.style.opacity = "1";
  flyingImg.style.pointerEvents = "none"; // للتأكد من أن الصورة لا تتفاعل مع الأحداث أثناء التحرك
   

  // حساب إحداثيات صورة المنتج
  let rect = productImage.getBoundingClientRect();
  let offsetX = window.scrollX;
  let offsetY = window.scrollY;
  flyingImg.style.left = `${rect.left + offsetX}px`;
  flyingImg.style.top = `${rect.top + offsetY}px`;

  document.body.appendChild(flyingImg);

  // حساب إحداثيات أيقونة السلة
  let cartRect = cartIcon.getBoundingClientRect();
  let cartOffsetX = window.scrollX;
  let cartOffsetY = window.scrollY;
 

  // التحريك إلى أيقونة السلة
  setTimeout(() => {
      flyingImg.style.left = `${cartRect.left + cartOffsetX}px`;
      flyingImg.style.top = `${cartRect.top + cartOffsetY}px`;
      flyingImg.style.opacity = "0"; // جعل الصورة تختفي عند الوصول إلى السلة
  }, 100);

  // بعد الانتهاء من الأنيميشن، إزالة الصورة
  setTimeout(() => {
      flyingImg.remove();
      updateCartIconCount();  // تحديث الرقم في الأيقونة بعد إتمام الأنيميشن
  }, 1000);
}
// ==============================================================================

 
function findProductById(productId) {
  console.log("Searching for product with ID:", productId);
  return products.find(product => product.ProductCode === productId);
}


function saveWishlistToLocalStorage() {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

function addProductToWishlist(event) {
  let button = event.currentTarget;
  let productId = button.getAttribute("data-product-id");
  console.log("Product ID:", productId);  // التحقق من الـ productId

  let product = findProductById(productId);

  if (!product) {
    console.error("❌ المنتج غير موجود.");
    return;
  }

  // التحقق مما إذا كان المنتج موجودًا بالفعل
  let existingProduct = wishlist.items.find(item => item.ProductCode === productId);

  if (!existingProduct) {
    wishlist.items.push({ ...product, quantity: 1 });  
    updateWishlistBadge();  // تحديث العدد فقط عند إضافة منتج جديد
  }

  // حفظ الـ wishlist في localStorage
  saveWishlistToLocalStorage();

  // تشغيل الأنيميشن
  animateProductToWishlist(event);

  // تحديث عرض الـ wishlist
  updateWishlistDisplay();
}


  
  function animateProductToWishlist(event) {
    let wishlistIcon = document.getElementById("wishlist-icon");
    if (!wishlistIcon) {
        console.error("❌ لم يتم العثور على أيقونة الـ Wishlist.");
        return;
    }
  
    let heartIcon = event.target.closest(".event")?.querySelector(".fas.fa-heart");
    if (!heartIcon) {
        console.error("❌ لم يتم العثور على أيقونة القلب داخل العنصر المناسب.");
        return;
    }
  
    let flyingHeart = heartIcon.cloneNode(true);
    flyingHeart.style.position = "absolute";
    flyingHeart.style.zIndex = "1000";
    flyingHeart.style.width = "30px";
    flyingHeart.style.height = "30px";
    flyingHeart.style.transition = "all 1s ease-in-out";
    flyingHeart.style.opacity = "1";
  
    // حساب الإحداثيات
    let rect = heartIcon.getBoundingClientRect();
    let offsetX = window.scrollX;
    let offsetY = window.scrollY;
    flyingHeart.style.left = `${rect.left + offsetX}px`;
    flyingHeart.style.top = `${rect.top + offsetY}px`;
  
    document.body.appendChild(flyingHeart);
  
    let wishlistRect = wishlistIcon.getBoundingClientRect();
    let wishlistOffsetX = window.scrollX;
    let wishlistOffsetY = window.scrollY;
  
    setTimeout(() => {
        flyingHeart.style.left = `${wishlistRect.left + wishlistOffsetX}px`;
        flyingHeart.style.top = `${wishlistRect.top + wishlistOffsetY}px`;
        flyingHeart.style.opacity = "0";
    }, 100);
  
    setTimeout(() => {
        flyingHeart.remove();
        updateWishlistIconCount();
    }, 1000);
  }
  function removeFromWishlist(productCode) {
    // 1. إزالة المنتج من القائمة
    wishlist.items = wishlist.items.filter(item => item.ProductCode !== productCode);
    
    // 2. حفظ التغييرات
    saveWishlistToLocalStorage();
    
    // 3. تحديث الواجهة (مع التحقق من وجود العناصر)
    updateWishlistBadge();
    
    // التحقق مما إذا كنا في صفحة الويش ليست
    if (window.location.pathname.includes("wishlist.html")) {
      updateWishlistTable(wishlist.items);
    } else {
      updateWishlistDisplay();
    }
  }
// ===============================================================  

// تفعيل الأحداث الخاصة بالعدادات عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".counter").forEach((counter) => {
      let incrementBtn = counter.querySelector(".increment");
      let decrementBtn = counter.querySelector(".decrement");
      let counterValue = counter.querySelector(".counterValue");

      if (incrementBtn && decrementBtn && counterValue) {
          // عند النقر على زر "+"
          incrementBtn.addEventListener("click", function () {
              let value = parseInt(counterValue.value, 10);
              counterValue.value = value + 1;
              updateQuantity(counterValue.dataset.productCode, 1); // تحديث الكمية في السلة
          });

          // عند النقر على زر "-"
          decrementBtn.addEventListener("click", function () {
              let value = parseInt(counterValue.value, 10);
              if (value > 1) {
                  counterValue.value = value - 1;
                  updateQuantity(counterValue.dataset.productCode, -1); // تحديث الكمية في السلة
              }
          });
      }
  });
});

  let cart = {
    items: [], // حفظ المنتجات المضافة
    count: 0,
    totalPrice: 0,
    freeShippingThreshold: 0.00, // الحد الأدنى للشحن المجاني
};

 
  function findProductById(productId) {
    console.log("🔍 البحث عن المنتج:", productId);
    
    let product = products.find(item => item.ProductCode === productId);
    
    if (!product) {
        console.error("❌ المنتج غير موجود في القائمة.");
    }

    return product;
}


 
function updateQuantity(productCode, delta) {
  let savedShoppingCart = localStorage.getItem("shoppingCart");
  let shoppingCart = savedShoppingCart ? JSON.parse(savedShoppingCart) : { items: [], totalPrice: 0 };

  // إيجاد المنتج في السلة
  let item = shoppingCart.items.find(item => item.ProductCode === productCode);

  if (item) {
      item.quantity += delta;

      // التأكد من أن الكمية لا تصبح أقل من 1
      if (item.quantity < 1) {
          item.quantity = 1;
      }

      // تحديث totalPrice للسلة
      let priceValue = parseFloat(item.price.replace("$", ""));
      shoppingCart.totalPrice = shoppingCart.items.reduce((total, item) => {
          return total + (parseFloat(item.price.replace("$", "")) * item.quantity);
      }, 0);

      // حفظ السلة الجديدة في localStorage
      localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));

      // تحديث عرض الكمية في الجدول
      updateCartTable(shoppingCart);
      
      // تحديث الأيقونة في الكارت
      updateCartIconCount();
  }
}

// دالة البحث عن المنتج باستخدام ProductCode
function findProductById(productId) {
  // البحث في جميع الفئات في المنتجات
  for (let category in products) {
      let foundProduct = products[category].find(p => p.ProductCode === productId);
      if (foundProduct) return foundProduct;
  }
  return null;
}


function setupCounter(product) {
  const decrementBtn = document.querySelector(`#decrement-${product.ProductCode}`);
  const incrementBtn = document.querySelector(`#increment-${product.ProductCode}`);
  const counterValue = document.querySelector(`#counterValue-${product.ProductCode}`);

  // تقليص الكمية عند النقر على زر "-"
  decrementBtn.addEventListener("click", function () {
      let value = parseInt(counterValue.value, 10);
      if (value > 1) {
          counterValue.value = value - 1;
          updateQuantity(product.ProductCode, -1);
      }
  });

  // زيادة الكمية عند النقر على زر "+"
  incrementBtn.addEventListener("click", function () {
      let value = parseInt(counterValue.value, 10);
      counterValue.value = value + 1;
      updateQuantity(product.ProductCode, 1);
  });

  // تحديث السلة باستخدام القيمة الحالية في الـ input
  counterValue.addEventListener("change", function () {
      updateCounter(product.ProductCode);
  });
}

 


function updateCartSummary() {
    // تحديث النصوص في العناصر
    let cartCountElement = document.getElementById("cart-count");
    let priceElement = document.querySelector(".price");
    let totalPriceElement = document.querySelector("#totalPrice");

    if (cartCountElement) cartCountElement.textContent = cart.count;
    if (priceElement) priceElement.textContent = `$${cart.totalPrice.toFixed(2)}`;

    let remainingAmount = cart.freeShippingThreshold - cart.totalPrice;
    if (totalPriceElement) {
        totalPriceElement.textContent = remainingAmount > 0 ? `$${remainingAmount.toFixed(2)}` : "0.00";
    }
}




function showCartItems() {
  let cartItemsList = document.querySelector(".cart-items-list");

  if (!cartItemsList) {
      console.error("❌ لم يتم العثور على عنصر .cart-items-list في الـ DOM");
      return;
  }

  let savedCart = localStorage.getItem("cart");
  let cart = savedCart ? JSON.parse(savedCart) : { items: [], totalPrice: 0 };


  cart.items.forEach((product, index) => {
      let pricePerItem = parseFloat(product.price.replace("$", "")); // سعر المنتج الواحد
  cartItemsList.innerHTML = '';   

      let totalProductPrice = pricePerItem * product.quantity; // السعر الإجمالي لهذا المنتج

      let itemDiv = document.createElement("div");
      itemDiv.classList.add("cart-item");

      itemDiv.innerHTML = `
          <div class="cart-item">
              <p><span class="cart-count">${product.quantity}</span> ITEM IN THE CART 
              (<span class="price">$${pricePerItem.toFixed(2)} × 
              <span class="counter-value">${product.quantity}</span> = 
              $${totalProductPrice.toFixed(2)}</span>)</p>
              <p>Buy for <span class="totalPrice price"> $${totalProductPrice.toFixed(2)}</span> more and get free shipping</p>
          </div>
          <div class="buttons">
              <button class="continue" onclick="closePopup()">CONTINUE SHOPPING</button>
              <button class="cart" onclick="goToCart()">GO TO THE CART</button>
          </div>
      `;

      cartItemsList.appendChild(itemDiv);
  });
}




// ==========================================================================


 
    let cartCount = 0;  // المتغير الذي سيحفظ عدد العناصر في السلة

 

    function addToCart(productId) {
      let savedCart = localStorage.getItem("cart");
      let savedShoppingCart = localStorage.getItem("shoppingCart");
  
      let cart = savedCart ? JSON.parse(savedCart) : null;
      let shoppingCart = savedShoppingCart ? JSON.parse(savedShoppingCart) : null;
  
      // التأكد من أن cart و shoppingCart موجودان ولديهما مصفوفة items
      if (!cart || !Array.isArray(cart.items)) {
          console.error("❌ cart.items غير موجودة أو ليست مصفوفة، سيتم تهيئتها.");
          cart = { items: [], totalPrice: 0 }; // تهيئة cart
      }
      if (!shoppingCart || !Array.isArray(shoppingCart.items)) {
          console.error("❌ shoppingCart.items غير موجودة أو ليست مصفوفة، سيتم تهيئتها.");
          shoppingCart = { items: [], totalPrice: 0 }; // تهيئة shoppingCart
      }
  
      let product = findProductById(productId);
      if (!product) {
          console.error("❌ المنتج غير موجود.");
          return;
      }
  
      let counterInput = document.querySelector(`#counterValue-${productId}`);
      let selectedQuantity = parseInt(counterInput?.value, 10) || 1;
  
      let existingProductInCart = cart.items.find(item => item.ProductCode === productId);
      let existingProductInShoppingCart = shoppingCart.items.find(item => item.ProductCode === productId);
  
      if (existingProductInCart) {
          existingProductInCart.quantity += selectedQuantity;
      } else {
          cart.items.push({ ...product, quantity: selectedQuantity });
      }
  
      if (existingProductInShoppingCart) {
          existingProductInShoppingCart.quantity += selectedQuantity;
      } else {
          shoppingCart.items.push({ ...product, quantity: selectedQuantity });
      }
  
      let priceValue = parseFloat(product.price.replace("$", ""));
      cart.totalPrice += priceValue * selectedQuantity;
      shoppingCart.totalPrice += priceValue * selectedQuantity;
  
      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  
      displayCartItems();
      showPopup();
      showCartItems();
      updateCartSubtotal();
      updateCartBadge();
      animateToCart(event, productId);
      moveProductToCart(productId, event);
      updateCartTable(cart)
  }
  
  
    
    function updateCartBadge() {
      let cartIcon = document.getElementById("cart-icon");
      let cartBadge = cartIcon.querySelector(".badge");
  
      if (!cartBadge) {
          cartBadge = document.createElement("span");
          cartBadge.classList.add("badge");
          cartIcon.appendChild(cartBadge);
      }
  
      let savedCart = localStorage.getItem("cart");
      let cart = savedCart ? JSON.parse(savedCart) : { items: [], totalPrice: 0 };
  
      let totalCartItemsCount = (cart.items || []).reduce((total, item) => total + item.quantity, 0);
      cartBadge.textContent = totalCartItemsCount > 0 ? totalCartItemsCount : 0;
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    let savedCart = localStorage.getItem("cart");
    let savedShoppingCart = localStorage.getItem("shoppingCart");

    cart = savedCart ? JSON.parse(savedCart) : { items: [], totalPrice: 0 };
    shoppingCart = savedShoppingCart ? JSON.parse(savedShoppingCart) : { items: [], totalPrice: 0 };

    console.log("✅ cart بعد التحميل:", cart);
    console.log("✅ shoppingCart بعد التحميل:", shoppingCart);

    updateCartTable(shoppingCart);
    displayCartItems();
    updateCartBadge();
    updateCartSubtotal();  
});


function removeFromCart(productCode) {
  let savedCart = localStorage.getItem("cart");
  let savedShoppingCart = localStorage.getItem("shoppingCart");

  let cart = savedCart ? JSON.parse(savedCart) : { items: [], totalPrice: 0 };
  let shoppingCart = savedShoppingCart ? JSON.parse(savedShoppingCart) : { items: [], totalPrice: 0 };

  let productIndexInCart = cart.items.findIndex(item => item.ProductCode === productCode);
  let productIndexInShoppingCart = shoppingCart.items.findIndex(item => item.ProductCode === productCode);

  // إذا كان العنصر موجودًا في السلة، قم بحذفه
  if (productIndexInCart > -1) {
      let removedItem = cart.items.splice(productIndexInCart, 1)[0];
      cart.totalPrice -= parseFloat(removedItem.price.replace("$", "")) * removedItem.quantity;
  }

  
  if (productIndexInShoppingCart > -1) {
      let removedItem = shoppingCart.items.splice(productIndexInShoppingCart, 1)[0];
      shoppingCart.totalPrice -= parseFloat(removedItem.price.replace("$", "")) * removedItem.quantity;
  }

 
  cart.totalPrice = Math.max(cart.totalPrice, 0);
  shoppingCart.totalPrice = Math.max(shoppingCart.totalPrice, 0);

 
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));

  
  displayCartItems();   
  updateCartSubtotal();
  updateCartIconCount(); 
  updateCartBadge();
  updateCartTable(shoppingCart);  
  updateCartIconCount();
}

   
function animateToCart(event, productId) {
       
  let productImage = document.getElementById("product-image");
  
  if (!productImage) {
      console.error("❌ لم يتم العثور على صورة المنتج.");
      return;
  }

  // نسخ الصورة
  let clonedImage = productImage.cloneNode(true);  

  // إعداد النسخة للتحريك
  clonedImage.style.position = "fixed";
  clonedImage.style.zIndex = "1000";
  clonedImage.style.transition = "all 1s ease-in-out";
  clonedImage.style.width = "50px";  // تحديد حجم النسخة أثناء تحريكها
  clonedImage.style.height = "50px"; // تحديد حجم النسخة أثناء تحريكها
  clonedImage.style.left = `${productImage.getBoundingClientRect().left}px`;
  clonedImage.style.top = `${productImage.getBoundingClientRect().top}px`;
  clonedImage.style.opacity = "1"; // تأكيد أن الصورة مرئية أثناء التحريك

  // إضافة النسخة في الـ DOM ليتم تحريكها
  document.body.appendChild(clonedImage);

  // الحصول على موقع أيقونة السلة في الهيدر
  let cartIcon = document.getElementById("cart-icon");
  let cartRect = cartIcon.getBoundingClientRect();

  // تحريك النسخة إلى أيقونة السلة
  setTimeout(() => {
      clonedImage.style.left = `${cartRect.left + window.scrollX}px`;
      clonedImage.style.top = `${cartRect.top + window.scrollY}px`;
      clonedImage.style.opacity = "0"; // جعل النسخة تختفي أثناء تحركها
  }, 0);

  // إزالة النسخة بعد اكتمال التحريك
  setTimeout(() => {
      clonedImage.remove();
  }, 1000);
}


function updateCartSubtotal() {
  let savedCart = localStorage.getItem("cart");
  let cart = savedCart ? JSON.parse(savedCart) : { items: [], totalPrice: 0 };

  let cartSubtotal = cart.totalPrice ? cart.totalPrice.toFixed(2) : "0.00";
  let subtotalElement = document.getElementById("cart-subtotal");

  if (subtotalElement) {
      subtotalElement.textContent = `$${cartSubtotal}`;
  }
}

 
document.addEventListener("DOMContentLoaded", function () {
  // تحقق من إذا كانت الصفحة هي cart.html
  if (!window.location.pathname.includes("cart.html")) {
      return; 
  }

  // جلب البيانات من localStorage
  let savedProducts = localStorage.getItem("products");
  
 
  if (!savedProducts) {
      return;
  }

  // تحويل البيانات من JSON إلى كائن
  let products = JSON.parse(savedProducts) || { items: [], totalPrice: 0 };
  
  console.log("✅ المنتجات بعد التحميل:", products);

  // تحديث الجدول باستخدام الدالة المحدثة
  updateCartTable(products);
  displayCartItems();
  updateCartBadge();
  updateCartSubtotal();  
});

function updateCartTable(cart) {
  let tableBody = document.getElementById("cart-table-body");

  if (!tableBody) return;

  tableBody.innerHTML = "";

  if (!cart.items || cart.items.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="6" class="empty-message">No product in the cart...</td></tr>`;

      let cartSubtotalElem = document.getElementById("cart-items-subtotal");
      let cartTotalElem = document.getElementById("cart-total");

      if (cartSubtotalElem) cartSubtotalElem.textContent = "$0.00";
      if (cartTotalElem) cartTotalElem.textContent = "$30.00"; // الشحن ثابت
      return;
  }

  let cartSubtotal = 0;

  cart.items.forEach(item => {
      let priceText = item.price.replace("$", "").trim();
      let priceValue = parseFloat(priceText);

      if (isNaN(priceValue)) {
          console.error(`🚨 خطأ في تحويل السعر للمنتج: ${item.title}, القيمة: ${item.price}`);
          priceValue = 0;
      }

      let subtotal = priceValue * item.quantity;
      cartSubtotal += subtotal;

      let row = document.createElement("tr");
      row.innerHTML = `
          <td><img src="${item.img}" alt="${item.title}" class="table-img"></td>
          <td>
              <h3 class="table-title">${item.title}</h3>
              <p class="table-description">${item.shortDescription || "لا يوجد وصف متاح"}</p>
          </td>
          <td><span class="table-price">$${priceValue.toFixed(2)}</span></td>
          <td>
              <div class="counter">
                  <button class="decrement" onclick="updateQuantity('${item.ProductCode}', -1)">-</button>
                  <input type="number" class="counterValue" value="${item.quantity}" min="1" readonly />
                  <button class="increment" onclick="updateQuantity('${item.ProductCode}', 1)">+</button>
              </div>
          </td>
          <td><span class="table-subtotal"> $${subtotal.toFixed(2)} </span></td>
          <td><i class="fa-solid fa-trash table-trash" onclick="removeFromCart('${item.ProductCode}')"></i></td>
      `;

      tableBody.appendChild(row);
  });

  let shippingCost = 30;
  let total = cartSubtotal + shippingCost;

  let cartSubtotalElem = document.getElementById("cart-items-subtotal");
  let cartTotalElem = document.getElementById("cart-total");

  if (cartSubtotalElem) cartSubtotalElem.textContent = `$${cartSubtotal.toFixed(2)}`;
  if (cartTotalElem) cartTotalElem.textContent = `$${total.toFixed(2)}`;
}

//  ==================================================y

let wishlist = { items: [] };

 

function saveWishlistToLocalStorage() {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

function loadWishlistFromLocalStorage() {
  let storedWishlist = localStorage.getItem("wishlist");

  if (storedWishlist) {
    try {
      let parsedWishlist = JSON.parse(storedWishlist);
      if (!parsedWishlist || typeof parsedWishlist !== "object" || !Array.isArray(parsedWishlist.items)) {
        wishlist = { items: [] };
      } else {
        wishlist = parsedWishlist;
      }
    } catch (e) {
      console.error("❌ خطأ في استرجاع بيانات الـ Wishlist:", e);
      wishlist = { items: [] };
    }
  } else {
    wishlist = { items: [] };
  }
}

document.addEventListener("DOMContentLoaded", function () {
  loadWishlistFromLocalStorage();
  updateWishlistBadge();
  updateWishlistDisplay();
  updateWishlistTable(wishlist.items);

  // إضافة مستمعين للأيقونة بعد تحميل الـ DOM
  let wishlistIcon = document.getElementById("wishlist-icon");
  if (wishlistIcon) {
    wishlistIcon.addEventListener('click', addToWishlist);
  }
  // إضافة مستمع للأيقونة الخاصة بالـ Wishlist
  document.querySelectorAll('i.bi-heart').forEach(icon => {
    icon.addEventListener('click', addToWishlist); 
  });
});


function addToWishlist(event) {
  let button = event.currentTarget;
  let productId = button.getAttribute("data-product-id");
  let product = findProductById(productId);

  if (!product) {
    console.error("❌ المنتج غير موجود.");
    return;
  }

  // التحقق مما إذا كان المنتج موجودًا بالفعل في القائمة
  let existingProduct = wishlist.items.find(item => item.ProductCode === productId);

  if (!existingProduct) {
    wishlist.items.push({ ...product, quantity: 1 });
    updateWishlistBadge();  // التحديث فقط عند إضافة منتج جديد
  }

  saveWishlistToLocalStorage();
  animateToWishlist(event);
  updateWishlistDisplay();
  updateWishlistTable(wishlist.items);
}


function animateToWishlist(event) {
 
  let heartIcon = event.currentTarget.querySelector("i");   
  console.log(heartIcon);  
  
  if (!heartIcon) {
    console.error("❌ لم يتم العثور على أيقونة القلب.");
    return;
  }

  let wishlistIcon = document.querySelector("#wishlist-icon");
  if (!wishlistIcon) {
    console.error("❌ لم يتم العثور على أيقونة الـ Wishlist.");
    return;
  }

  
  let flyingHeart = heartIcon.cloneNode(true);
  flyingHeart.style.position = "fixed";
  flyingHeart.style.zIndex = "1000";
  flyingHeart.style.width = "30px";
  flyingHeart.style.height = "30px";
  flyingHeart.style.transition = "all 1s ease-in-out";
  flyingHeart.style.opacity = "1";
  flyingHeart.style.left = `${heartIcon.getBoundingClientRect().left}px`;
  flyingHeart.style.top = `${heartIcon.getBoundingClientRect().top}px`;

  document.body.appendChild(flyingHeart);

  let wishlistRect = wishlistIcon.getBoundingClientRect();

  setTimeout(() => {
    flyingHeart.style.left = `${wishlistRect.left}px`;
    flyingHeart.style.top = `${wishlistRect.top}px`;
    flyingHeart.style.opacity = "0";
  }, 100);

  setTimeout(() => {
    flyingHeart.remove();
    updateWishlistBadge();
  }, 1000);
}

function removeFromWishlist(productCode) {
 
  wishlist.items = wishlist.items.filter(item => item.ProductCode !== productCode);

  
  localStorage.setItem("wishlist", JSON.stringify(wishlist));

  updateWishlistTable(wishlist.items);
  updateWishlistBadge();
  updateWishlistDisplay(); 
} 
 
 
document.addEventListener("DOMContentLoaded", function () {
  if (!window.location.pathname.includes("wishlist.html")) {
      return; 
  }

  let savedProducts = localStorage.getItem("products");
  if (!savedProducts) {
      return;
  }

  let products = JSON.parse(savedProducts) || { items: [], totalPrice: 0 };
  console.log("✅ المنتجات بعد التحميل:", products);

  // استدعاء تحميل البيانات من LocalStorage
  loadWishlistFromLocalStorage();

  // تحديث العرض فقط إذا كانت الصفحة Wishlist
  updateWishlistTable(wishlist.items);
  updateWishlistBadge();
});


function loadWishlistFromLocalStorage() {
  let storedWishlist = localStorage.getItem("wishlist");

  // تحقق من أن البيانات موجودة في localStorage
  if (!storedWishlist) {
    return;
  }

  // جلب البيانات من localStorage وتحويلها إلى كائن
  wishlist = JSON.parse(storedWishlist) || { items: [] };

  // تحقق من أن items هي مصفوفة
  if (!Array.isArray(wishlist.items)) {
    wishlist.items = [];
    console.error("❌ items ليست مصفوفة في البيانات المحفوظة في localStorage!");
  }

}

function updateWishlistTable(wishlistItems) {
  let tableBody = document.getElementById("wishlist-body");
  if (!tableBody) return;

  let wishlistSubtotalElement = document.getElementById("wishlist-subtotal");
  if (wishlistItems.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="6" class="empty-message">No product in the wishlist...</td></tr>`;
      if (wishlistSubtotalElement) wishlistSubtotalElement.innerText = "$0.00";
      return;
  }

  tableBody.innerHTML = "";
  wishlistItems.forEach(item => {
      let priceValue = parseFloat(item.price.replace("$", ""));
      const row = document.createElement("tr");
      row.innerHTML = `
          <td><img src="${item.img}" alt="" class="table-img" /></td>
          <td>
              <h3 class="table-title">${item.title}</h3>
              <p class="table-description">${item.shortDescription}</p>
          </td>
          <td><span class="table-price">$${priceValue.toFixed(2)}</span></td>
          <td><span class="stock">In Stock</span></td>
          <td>
              <div class="add">
                  <button
                      class="shopping-cart"
                      data-id="${item.ProductCode}"
                      onclick="addToCart('${item.ProductCode}', event)"
                  >
                      <i class="fas fa-shopping-cart"></i>
                      <span class="add-to-cart"> Add to Cart</span>
                  </button>
              </div>
          </td>
          <td><i class="fa-solid fa-trash table-trash" onclick="removeFromWishlist('${item.ProductCode}')"></i></td>
      `;
      tableBody.appendChild(row);
  });

  if (wishlistSubtotalElement) {
      let totalPrice = wishlistItems.reduce((total, item) => total + parseFloat(item.price.replace("$", "")) * item.quantity, 0);
      wishlistSubtotalElement.innerText = `$${totalPrice.toFixed(2)}`;
  }
}


function saveWishlistToLocalStorage() {
  // حفظ الويش ليست في localStorage
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}
function updateWishlistDisplay() {
  let wishlistContainer = document.getElementById("wishlist-items-container");
  let wishlistSubtotalElement = document.getElementById("wishlist-subtotal");

  if (!Array.isArray(wishlist.items)) {
    wishlist.items = [];
  }

  wishlistContainer.innerHTML = "";

  if (wishlist.items.length === 0) {
      wishlistContainer.innerHTML = "<p id='empty-wishlist-message'>No product in the wishlist</p>";
      wishlistSubtotalElement.innerText = "$0.00";
      return;
  }

  wishlist.items.forEach(item => {
      let priceValue = parseFloat(item.price.replace("$", ""));
      let wishlistItem = document.createElement("div");
      wishlistItem.classList.add("wishlist-item");
      wishlistItem.innerHTML = `
          <img src="${item.img}" alt="${item.title}">
          <div class="wishlist-item-details">
              <div class="wishlist-item-name">${item.title}</div>
              <div class="wishlist-item-price">  $${priceValue.toFixed(2)}</div>
          </div>
          <button class="wishlist-item-remove" onclick="removeFromWishlist('${item.ProductCode}')">&times;</button>
      `;
      wishlistContainer.appendChild(wishlistItem);
  });

  let totalPrice = wishlist.items.reduce((total, item) => total + parseFloat(item.price.replace("$", "")) * item.quantity, 0);
  wishlistSubtotalElement.innerText = `$${totalPrice.toFixed(2)}`;
}

//  ===========================================

function moveProductToCart(productCode, event) {
  let button = event.currentTarget;
  let row = button.closest("tr");

  if (!row) {
      console.error("❌ لم يتم العثور على الصف الخاص بالمنتج!");
      return;
  }

  let productImg = row.querySelector(".table-img");
  let cartIcon = document.getElementById("cart-icon"); // استخدم ID بدلًا من class

  if (!productImg) {
      console.error("❌ لم يتم العثور على صورة المنتج!");
      return;
  }

  if (!cartIcon) {
      console.error("❌ لم يتم العثور على أيقونة السلة!");
      return;
  }

  // إنشاء نسخة من الصورة
  let clonedImg = productImg.cloneNode(true);
  document.body.appendChild(clonedImg);

  // تحديد موضع الصورة الأصلية
  let imgRect = productImg.getBoundingClientRect();
  let cartRect = cartIcon.getBoundingClientRect();

  clonedImg.style.position = "absolute";
  clonedImg.style.width = "50px"; // تصغير الصورة أثناء التحريك
  clonedImg.style.zIndex = "1000";
  clonedImg.style.top = `${imgRect.top}px`;
  clonedImg.style.left = `${imgRect.left}px`;
  clonedImg.style.transition = "transform 1s ease-in-out, opacity 1s ease-in-out";

  // حساب المسافة بين الصورة الأصلية والسلة وتحريكها
  let deltaX = cartRect.left - imgRect.left;
  let deltaY = cartRect.top - imgRect.top;

  requestAnimationFrame(() => {
      clonedImg.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0.5)`;
      clonedImg.style.opacity = "0";
  });

  // حذف الصورة بعد الانتهاء من الحركة
  setTimeout(() => {
      clonedImg.remove();
  }, 1000);
}




function updateWishlistBadge() {
  let wishlistIcon = document.getElementById("wishlist-icon");
  let wishlistBadge = wishlistIcon.querySelector(".badge");

  if (!wishlistBadge) {
      wishlistBadge = document.createElement("span");
      wishlistBadge.classList.add("badge");
      wishlistIcon.appendChild(wishlistBadge);
  }

  // حساب عدد العناصر في الـ Wishlist
  let totalWishlistItemsCount = wishlist.items.reduce((total, item) => total + item.quantity, 0);
  wishlistBadge.textContent = totalWishlistItemsCount > 0 ? totalWishlistItemsCount : 0;
}

// =========================================================================
// total without cart page
function updateCartTotals() {
    let cartSubtotalElement = document.getElementById("cart-items-subtotal");
    let shippingElement = document.getElementById("shipping-cost");
    let totalElement = document.getElementById("cart-total");

    if (!cartSubtotalElement || !shippingElement || !totalElement) {
         
        return;
    }

    // استرجاع المنتجات من localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || { items: [] };

    // حساب المجموع الفرعي (جمع أسعار المنتجات * كميتها)
    let subtotal = cart.items.reduce((total, item) => {
        return total + (parseFloat(item.price.replace("$", "")) * item.quantity);
    }, 0);

    // تحديد قيمة الشحن (يمكن تغييرها حسب الحاجة)
    let shippingCost = subtotal > 0 ? 30 : 0;

    // حساب المجموع الكلي
    let total = subtotal + shippingCost;

    // تحديث القيم في الصفحة
    cartSubtotalElement.innerText = `$${subtotal.toFixed(2)}`;
    shippingElement.innerText = `$${shippingCost.toFixed(2)}`;
    totalElement.innerText = `$${total.toFixed(2)}`;
}

// استدعاء الدالة عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", updateCartTotals);


// =========================================================================
document.addEventListener("DOMContentLoaded", function () {
  let cartData = localStorage.getItem("cart");

  let cart = [];

  // محاولة لتحويل البيانات من JSON
  try {
      if (cartData) {
          let parsedData = JSON.parse(cartData);
          cart = parsedData.items || [];
      }
  } catch (error) {
      console.error("❌ Error parsing cart data:", error);
      cart = [];
  }

  console.log("Parsed cart:", cart); // ✅ يجب أن يعرض مصفوفة المنتجات فقط

  let table = document.querySelector(".order-table");
  if (!table) return;
  let cartContainer = document.getElementById("cart-items-container");
  let noProductMsg = document.getElementById("no-product-msg");
  let subtotal = 0;

  // إزالة جميع الصفوف الخاصة بالمنتجات ما عدا العناوين
  let rows = table.querySelectorAll("tr:not(:first-child):not(:nth-child(2)):not(:nth-child(3)):not(:nth-child(4))");
  rows.forEach(row => row.remove());

  // التحقق إذا كانت السلة فارغة
  if (cart.length === 0) {
      // إظهار الرسالة عند خلو السلة
      noProductMsg.style.display = "block"; // إظهار البرجراف
  } else {
      // إخفاء الرسالة وإضافة المنتجات في السلة
      noProductMsg.style.display = "none"; // إخفاء البرجراف
      cart.forEach((product) => {
          let price = parseFloat(product.price.replace("$", "")) || 0; // تحويل السعر إلى رقم
          let quantity = product.quantity || 1;
          let total = (price * quantity).toFixed(2);

          // إنشاء صف جديد للمنتج
          let row = document.createElement("tr");

          row.innerHTML = `
              <td><img src="${product.img}" alt="${product.title}" class="order-img"></td>
              <td>
                  <h3 class="order-title">${product.title}</h3>
                  <p class="table-quality">x ${quantity}</p>
              </td>
              <td><span class="table-price">$${total}</span></td>
          `;

          // إضافة الصف للجدول
          table.appendChild(row);
          subtotal += price * quantity;
      });
  }

  // إضافة سطر Subtotal (يظل موجود حتى في حالة عدم وجود منتجات)
  let subtotalRow = document.createElement("tr");
  subtotalRow.innerHTML = `
      <td><span class="order-subtitle">SubTotal</span></td>
      <td colspan="2"><span class="table-price" id="checkout-subtotal">$${subtotal.toFixed(2)}</span></td>
  `;
  table.appendChild(subtotalRow);

  // إضافة سطر Shipping (يظل موجود حتى في حالة عدم وجود منتجات)
  let shippingRow = document.createElement("tr");
  shippingRow.innerHTML = `
      <td><span class="order-subtitle">Shipping</span></td>
      <td colspan="2"><span class="table-price">Free Shipping</span></td>
  `;
  table.appendChild(shippingRow);

  // إضافة سطر Total (يظل موجود حتى في حالة عدم وجود منتجات)
  let totalRow = document.createElement("tr");
  totalRow.innerHTML = `
      <td><span class="order-subtitle">Total</span></td>
      <td colspan="2"><span class="order-grand-total" id="checkout-total">$${subtotal.toFixed(2)}</span></td>
  `;
  table.appendChild(totalRow);
});


//  quantity for checkout

function updateQuantity(productCode, delta) {
  // استرجاع الكارت من localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || { items: [] };

  let item = cart.items.find(item => item.ProductCode === productCode);

  if (item) {
      // تحديث الكمية
      item.quantity += delta;

      // التأكد من أن الكمية لا تصبح أقل من 1
      if (item.quantity < 1) {
          item.quantity = 1;
      }

      // تحديث الكارت في localStorage
      localStorage.setItem("cart", JSON.stringify(cart));

      // تحديث الجدول
      updateCartTable(cart);

    
  }
}

 

//  localStorage.clear(); // لحذف جميع البيانات المخزنة في الـ LocalStorage










 