const products = [
    {
      id: 1,
      name: 'Men Printed Round Neck Pure Cotton Black T-Shirt',
      price: 255,
      category: 'Fashion(Men)',
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/0/y/g/xl-anime-tshirt-for-men-zen1fashion-original-imah3dwrzjgjbyba.jpeg?q=70',
      description: 'Stay stylish and comfortable with this printed black round neck T-shirt made from pure cotton. Perfect for casual outings or a relaxed day.',
      ratings: 4.5
    },
    {
      id: 2,
      name: 'Men Colorblock Round Neck Pure Cotton Green, Black T-Shirt',
      price: 229,
      category: 'Fashion(Men)',
      image: 'https://rukminim2.flixcart.com/image/612/612/kfoapow0-0/t-shirt/w/l/7/s-daredevil-party-wear-wrath-original-imafw2kc8ducmcbp.jpeg?q=70',
      description: 'Add a pop of color to your wardrobe with this colorblock round neck T-shirt. Made from pure cotton for all-day comfort.',
      ratings: 3.5
    },
    {
      id: 3,
      name: 'Men Self Design Polo Neck Polyester Brown T-Shirt',
      price: 299,
      category: 'Fashion(Men)',
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/2/d/l/l-polo-8014-kajaru-original-imah75gnqkcp9ytd.jpeg?q=70',
      description: 'This self-designed brown polo neck T-shirt made of polyester is a great choice for a sleek and trendy look.',
      ratings: 2
    }, 
    {
      id: 4,
      name: 'Men Printed Hooded Neck Cotton Blend Black, Purple T-Shirt',
      price: 279,
      category: 'Fashion(Men)',
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/y/t/g/m-jc23-hd-fs-black-purple-chicago-jump-cuts-original-imagtbghtxauftfs.jpeg?q=70',
      description: 'Step out in style with this hooded T-shirt featuring a vibrant black and purple print. Crafted from a soft cotton blend.',
      ratings: 4.5
    },
    {
      id: 5,
      name: 'Men Solid Polo Neck Polyester Green T-Shirt',
      price: 249,
      category: 'Fashion(Men)',
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/u/s/8/s-ts36-vebnor-original-imah8syvubganrmt.jpeg?q=70',
      description: 'Elevate your casual wear with this solid green polo neck T-shirt. Made from durable polyester for everyday wear.',
      ratings: 4.54
    }, 
    {
        id: 6,
        name: 'Men Solid Round Neck Polyester Pink T-Shirt',
        price: 279,
        category: 'Fashion(Men)',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/g/e/m/m-fmt241-pogo-pk-force-original-imah5fs5zzphdwst.jpeg?q=70',
        description: 'Brighten your outfit with this solid pink round neck T-shirt made of lightweight polyester fabric for easy mobility.',
        ratings: 4.94
    },
    {
        id: 7,
        name: 'Men Embroidered Cotton Blend Straight Kurta  (Purple)',
        price: 679,
        category: 'Fashion(Men)',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/g/c/g/xl-mirror-kurta-tezys-original-imah6etpyptyqrzc.jpeg?q=70',
        description: 'This purple embroidered straight kurta is perfect for festive and formal occasions. Made from a comfortable cotton blend.',
        ratings: 4.5
    },
    {
        id: 8,
        name: 'Men Solid Cotton Blend Straight Kurta  (Black)',
        price: 245,
        category: 'Fashion(Men)',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/p/3/j/m-plain-kurta-triveni-creation-original-imahybf9mf6nftmu.jpeg?q=70',
        description: 'Keep it classy with this solid black straight kurta. Crafted from a breathable cotton blend for a relaxed fit.',
        ratings: 2.5
    },
    {
        id: 9,
        name: 'Men Printed Cotton Blend Straight Kurta  (White)',
        price: 395,
        category: 'Fashion(Men)',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/1/i/a/xl-derfv04-deelmo-original-imah72ypppfuw36x.jpeg?q=70',
        description: 'Make a statement with this white printed kurta. Designed from a cotton blend, it’s ideal for both casual and formal events.',
        ratings: 3.45
    }, 
    {
        id: 10,
        name: 'Men Solid Cotton Blend Straight Kurta  (Light Blue)',
        price: 399,
        category: 'Fashion(Men)',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/v/p/m/m-kurta1501-zartha-original-imagsuzdfeyy2wgh.jpeg?q=70',
        description: 'This light blue solid kurta offers a sophisticated look. Made from a soft cotton blend for comfort throughout the day.',
        ratings: 2.34
    },
    {
        id: 11,
        name: 'realme P1 5G (Feather Blue, 128 GB)  (6 GB RAM)',
        price: 14999,
        category: 'Electronics',
        image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/x/f/-original-imah4khx9u3zxdbk.jpeg?q=70',
        description: 'Experience lightning-fast performance with the realme P1 5G, featuring 128GB storage and 6GB RAM. Perfect for multitasking and gaming.',
        ratings: 3
    },
    {
        id: 12,
        name: 'vivo V40 5G (Lotus Purple, 256 GB)  (8 GB RAM)',
        price: 36999,
        category: 'Electronics',
        image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/f/m/m/-original-imah3hvk9kgfsads.jpeg?q=70',
        description: 'Unleash superior performance with the vivo V40 5G 5G. Featuring 256GB storage, 12GB RAM, and a stunning Mystic Black finish, it’s built for power users.',
        ratings: 4.5
    }, 
    {
        id: 13,
        name: 'vivo T3x 5G (Sapphire Blue, 128 GB)  (6 GB RAM)',
        price: 13999,
        category: 'Electronics',
        image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/x/1/-original-imah4kxes2ktzf9f.jpeg?q=70',
        description: 'Immerse yourself in sound with  vivo T3x 5G (Sapphire Blue, 128 GB)  (6 GB RAM) , offering premium noise cancellation, high-resolution audio, and wireless convenience.',
        ratings: 5
    },
    {
        id: 14,
        name: 'vivo V40e 5G (Royal Bronze, 256 GB)  (8 GB RAM)',
        price: 28999,
        category: 'Electronics',
        image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/7/v/f/v40e-5g-v2403-vivo-original-imah6yshxyvnyfnt.jpeg?q=70',
        description: 'Lorem ipsum jjdndn sjsjksk fkfkmfm gwvbenn zkkxkkx hhgiejrnen dbbdggwha',
        ratings: 2.45
    }, 
    {
        id: 15,
        name: 'vivo T3 5G (Cosmic Blue, 128 GB)  (8 GB RAM)',
        price: 18499,
        category: 'Electronics',
        image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/d/1/-original-imagz6tzjgggzygu.jpeg?q=70',
        description: 'Lorem ipsum jjdndn sjsjksk fkfkmfm gwvbenn zkkxkkx hhgiejrnen dbbdggwha',
        ratings: 3.68
    },
    {
        id: 16,
        name: 'HP AMD Ryzen 5 Hexa Core 5600H - (8 GB/512 GB SSD/Windows 11 Home/AMD Radeon AMD) 15-fb0153AX Gaming Laptop  (15.6 Inch, Performance Blue, Chrome Logo, 2.29 kg, With MS Office)',
        price: 50000,
        category: 'Electronics',
        image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/x/0/g/15-fb0150ax-gaming-laptop-hp-original-imagrwmg9nw5ayzf.jpeg?q=70',
        description: 'Lorem ipsum jjdndn sjsjksk fkfkmfm gwvbenn zkkxkkx hhgiejrnen dbbdggwha',
        ratings: 4.5
    },
    {
        id: 17,
        name: 'HP Victus AMD Ryzen 5 Hexa Core 5600H - (16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/AMD Radeon RX 6500M) 15-fb0134AX Gaming Laptop  (15.6 Inch, Performance Blue, 2.37 Kg)',
        price: 52000,
        category: 'Electronics',
        image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/8/i/j/-original-imagthcbgurdzwuc.jpeg?q=70',
        description: 'Lorem ipsum jjdndn sjsjksk fkfkmfm gwvbenn zkkxkkx hhgiejrnen dbbdggwha',
        ratings: 2.34
    },
    {
        id: 18,
        name: 'Ultimus Elite Intel Core i5 10th Gen 1035G4 - (8 GB/512 GB SSD/Windows 11 Home) NU14U3INF56BN-MB Thin and Light Laptop  (14.1 Inch, Matt Black, 1.3 Kg)',
        price: 25000,
        category: 'Electronics',
        image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/g/c/y/nu14u3inf56bn-mb-thin-and-light-laptop-ultimus-original-imagrtanznjrgb3u.jpeg?q=70',
        description: 'Lorem ipsum jjdndn sjsjksk fkfkmfm gwvbenn zkkxkkx hhgiejrnen dbbdggwha',
        ratings: 3.78
    },
    {
        id: 19,
        name: 'Athleisure Men Mesh White&Grey Walking Shoes Running Shoes For Men  (White , 8)',
        price: 1343,
        category: 'Footwear',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/l/j/k/10-hrxecsp664-hrx-by-hrithik-roshan-white-grey-original-imah4k4pzzzjj79g.jpeg?q=70',
        description: 'Lorem ipsum jjdndn sjsjksk fkfkmfm gwvbenn zkkxkkx hhgiejrnen dbbdggwha',
        ratings: 4.6
    },
    {
        id: 20,
        name: 'OGIY RETRO SHOES HIGH PREMIUM QUALITY Sneakers For Men  (White , 6)',
        price: 599,
        category: 'Footwear',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/3/h/r/6-oogiy-40-aeonik-white-original-imagxggbkjyu2gze.jpeg?q=70',
        description: 'Lorem ipsum jjdndn sjsjksk fkfkmfm gwvbenn zkkxkkx hhgiejrnen dbbdggwha',
        ratings: 4.5
    }, 
    {
        id: 21,
        name: 'Mens Black Formal Derby Lace Up Shoes (SXWC) - 12 UK Lace Up For Men  (Black , 12)',
        price: 2299,
        category: 'Footwear',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/8/0/a/7-lssxwc-7-louis-stitch-obsidian-black-original-imah8gahaeazgzdk.jpeg?q=70'
    },
    {
        id: 22,
        name: 'All Day Comfortable Wear Fashion High Premium Quality Shoe Loafers For Men  (Brown , 7)',
        price: 3099,
        category: 'Footwear',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/t/b/h/6-overstarl-brown-6-6-overstar-brown-original-imah7zy8u62vqxuc.jpeg?q=70'
    },
    {
        id: 23,
        name: '  Casuals For Men  (Black , 7)',
        price: 723,
        category: 'Footwear',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/i/b/a/9-8216326-9-bata-black-original-imah45cxjb7zfej8.jpeg?q=70'
    },
    {
        id: 24,
        name: 'Men Slim Fit Blue Polyester Trousers',
        price: 599,
        category: 'Fashion(Men)',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/k/z/8/38-4msr5248-04-snitch-original-imah8kjzprp7nqyf.jpeg?q=70'
    },
    {
        id: 25,
        name: 'Men Regular Fit Beige Pure Linen Trousers',
        price: 1899,
        category: 'Fashion(Men)',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/d/0/w/34-4mtp0025-07-snitch-original-imah93hekpyxwayy.jpeg?q=70'
    },
    {
        id: 26,
        name: 'Men Slim Fit Grey Cotton Blend Trousers',
        price: 1499,
        category: 'Fashion(Men)',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/b/f/b/34-4msr5179-02-snitch-original-imah8amsqyqfsfyh.jpeg?q=70'
    },
    {
        id: 27,
        name: 'Men Slim Fit Cream Polyester Trousers',
        price: 2000,
        category: 'Fashion(Men)',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/q/a/e/30-4msr5248-07-snitch-original-imah8mgyf6r8ry4d.jpeg?q=70'
    },
    {
        id: 28,
        name: 'Men Regular Fit Dark Green Cotton Blend Trousers',
        price: 234,
        category: 'Fashion(Men)',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/n/0/l/34-sv-gr-streetvibes-original-imahfgznhstq9gek.jpeg?q=70'
    },
    {
        id: 29,
        name: 'Canon EOS R10 Mirrorless Camera Body with RF-S 18 - 45 mm f/4.5 - 6.3 IS STM Lens  (Black)',
        price: 78999,
        category: 'Electronics',
        image: 'https://rukminim2.flixcart.com/image/312/312/l5fnhjk0/dslr-camera/g/t/7/eos-r10-24-2-r10-canon-original-imagg4y52cybasdr.jpeg?q=70',
    },
    {
        id: 30,
        name: 'Canon R100 Mirrorless Camera RF-S 18-45mm f/4.5-6.3 IS STM  (Black)',
        price: 44990,
        category: 'Electronics',
        image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/dslr-camera/i/o/c/eos-r100-24-1-eos-r100-kit-canon-original-imagqeydhsxgacxp.jpeg?q=70'
    },
    {
        id: 31,
        name: 'SONY Bravia 2 108 cm (43 inch) Ultra HD (4K) LED Smart Google TV 2024 Edition  (K-43S20B)',
        price: 38990,
        category: 'Appliances',
        image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/television/i/8/0/-original-imah2dzwa44rbqds.jpeg?q=70'
    },
    {
        id: 32,
        name: 'Vu 126 cm (50 inch) Ultra HD (4K) LED Smart Google TV with VuOn 1.5 Processor I Perfect Phone Partner I 2-Way Bluetooth I Camera Support for Video Conferencing I Cricket Mode & Cinema Mode I WiFi Remote Control I Dolby Vision I 24W DTS Virtual X Sound I Game Dashboard I Blue Light Protection (2024 edition)  (50GLOLED25)',
        price: 29999,
        category: 'Appliances',
        image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/television/r/5/y/-original-imah45dz7wrms9wk.jpeg?q=70'
    },
    {
        id: 33,
        name: 'Godrej 237 L Direct Cool Double Door 3 Star Refrigerator with Separate Veggie Drawer  (Jade Wine, RD EDUO 270C TDI JD WN)',
        price: 20390,
        category: 'Appliances',
        image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/refrigerator-new/3/1/z/-original-imahygjxwhzuh6ae.jpeg?q=70'
    },
    {
        id: 34,
        name: 'Godrej 244 L Frost Free Double Door 2 Star Refrigerator with Wood Finish and Advanced Inverter Technology  (Walnut Wood, RT EONVOGUE 280B RI WT WD)',
        price: 30000,
        category: 'Appliances',
        image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/refrigerator-new/p/j/b/rt-eonvogue-280b-ri-wt-wd-1570-2-2024-57-4-godrej-642-4-607-original-imah8j5frxzyvw4y.jpeg?q=70'
    },
    {
        id: 35,
        name: 'Sleepyhead Leatherette Manual Recliner  (Finish Color - Black, DIY(Do-It-Yourself))',
        price: 14249,
        category: 'Home Furniture',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/recliner/f/e/k/88-1-seater-black-89-leatherette-rx5-sleepyhead-97-black-original-imah8ra5fddmxhnp.jpeg?q=70'
    },
    {
        id: 36,
        name: 'Pali Plastic Metal 8 Shelf Book Organizer Plastic Open Book Shelf  (Finish Color - Blue, DIY(Do-It-Yourself))',
        price: 1167,
        category: 'Home Furniture',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/book-shelf/u/a/3/pp-bookshelves-book-shelf-in-furniture-book-shelf-with-study-original-imah3zf8g6jvwxwg.jpeg?q=70'
    },
    {
        id: 37,
        name: 'sbf furniture Engineered Wood Open Book Shelf  (Finish Color - Brown, DIY(Do-It-Yourself))',
        price: 1649,
        category: 'Home Furniture',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/book-shelf/k/g/j/22-2-particle-board-47-2-2-bookshelf-multipurpose-ne-furniture-original-imah2myj6zckzg2w.jpeg?q=70'
    },
    {
        id: 38,
        name: 'Oakcraft Engineered Wood Open Book Shelf  (Finish Color - BLACK, Knock Down)',
        price: 3099,
        category: 'Home Furniture',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/book-shelf/j/q/4/23-particle-board-66-18-oc-503-6-tier-black-oakcraft-160-black-6-original-imah3yef6n7mtzch.jpeg?q=70'
    },
    {
        id: 39,
        name: 'Seventh Heaven 78x36x14 inch Jute Fabric with 4 Cushions 4 Seater Single Foam Fold Out Sofa Cum Bed  (Finish Color - Blue Delivery Condition - Pre-assembled)',
        price: 9099,
        category: 'Home Furniture',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-bed/v/b/q/single-198-12-4-seater-blue-jute-91-44-no-19-sb78-36-14-same4c-original-imah8ubg6kzupjsh.jpeg?q=70'
    },
    {
        id: 40,
        name: 'Supreme Fusion SR 1 for Home Small Size Plastic Shoe Rack  (Brown, Beige, 3 Shelves, DIY(Do-It-Yourself))',
        price: 2099,
        category: 'Home Furniture',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe-rack/v/6/o/37-59-6-36-fusion-01-shoe-rack-globus-brown-and-beige-supreme-original-imah28tgb5c5mvpy.jpeg?q=70'
    },
    {
        id: 41,
        name: 'Pigeon Favourite Gift Non-Stick Coated Cookware Set  (Aluminium, 7 - Piece)',
        price: 1199,
        category: 'Kitchen,Cookware & Serveware',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/cookware-set/i/l/d/-original-imah8r26bqt2hqha.jpeg?q=70'
    },
    {
        id: 42,
        name: 'Benon Granite Coated Casserole Set of 2.5L+3.5L+4.5L Induction Bottom Non-Stick Coated Cookware Set  (Aluminium, 3 - Piece)',
        price: 3500,
        category: 'Kitchen,Cookware & Serveware',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/cookware-set/r/8/p/3-ben0001-benon-original-imah7yr98c6phv4g.jpeg?q=70'
    },
    {
        id: 43,
        name: 'NSVL Non-Stick Dosa Tawa & Appam Maker | Granite Finish | PFOA Free Non-Stick Coated Cookware Set  (Aluminium, 2 - Piece)',
        price: 599,
        category: 'Kitchen,Cookware & Serveware',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/cookware-set/a/k/m/2-appam-dosa-combo-nsvl-original-imah5pgk3hw3eyfr.jpeg?q=70'
    },
    {
        id: 44,
        name: 'cello Pack of 10 Opalware Dazzle Opalware Oleander Dinner Set | Crockery Set |Green Dinner Set  (Green, Microwave Safe)',
        price: 699,
        category: 'Kitchen,Cookware & Serveware',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dinner-set/g/d/b/-original-imah46t3gdn9uack.jpeg?q=70'
    },
    {
        id: 45,
        name: 'Flipkart SmartBuy Pack of 40 Melamin Blossom Spectrum Melamine|Dishwasher Safe|Stain Resistant Dinner Set  (White, Multicolor)',
        price: 1500,
        category: 'Kitchen,Cookware & Serveware',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dinner-set/i/y/u/no-40-blossom-spectrum-melamine-dinner-set-dishwasher-safe-stain-original-imah3nr6y8hguudc.jpeg?q=70'
    },
    {
        id: 46,
        name: 'Flipkart SmartBuy Pack of 61 Stainless Steel Dinner Set  (Silver)',
        price: 2589,
        category: 'Kitchen,Cookware & Serveware',
        image: 'https://rukminim2.flixcart.com/image/612/612/l15bxjk0/dinner-set/8/4/y/-original-imagcrvntmcsgc8x.jpeg?q=70'
    },
    {
        id: 47,
        name: 'TREO Glass Serving Bowl JELO BOWL 420 ml 2 Pcs Set  (Pack of 2, Clear)',
        price: 299,
        category: 'Kitchen,Cookware & Serveware',
        image: 'https://rukminim2.flixcart.com/image/612/612/kbnz8nk0/bowl/z/u/x/cgwffgo015assr0001-jelo-bowl-420-ml-2-pc-set-treo-original-imafsy24ykyx6zb4.jpeg?q=70'
    }
];

export default products;