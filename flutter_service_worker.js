'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2cd1617cd119517e45c4f67226740651",
".git/config": "db0c9f0062c347727a94ca8d54744398",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e705844a5e50d480e9cdfd3f5d15cbb8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bc9323fcdfcffe852dd0b57c65a66494",
".git/logs/refs/heads/main": "20ae8b726f22d50cd92190b19f688864",
".git/logs/refs/remotes/origin/main": "1e969da23673b2505a0d38fcbd0d77ee",
".git/objects/02/59fd8aab0d84a651aa734a69a14b31de54ee37": "63b63d576bbc7b3d8c452d9b92b789c4",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0b/b78bbf7dc4fda09b5a2ad8861ba43bdba2f3d8": "3266fec78649dafaa01df7740eac6188",
".git/objects/0d/427f002fcfb2a2fa26c54152094c42ee6fe3ed": "10af7d3655ab10c56575cb7d30c802f7",
".git/objects/0d/97a20c10bc44180c4084727fc7cd097c53958b": "3bed0343eace852eceefc6907c13b352",
".git/objects/0e/44889675baa7bf0c3a58f04757d2fd94a9cdae": "ea9203031995c5a15b5b999a195efc14",
".git/objects/11/8116124fc71cee30e57a172e11504b68a59bb8": "1cf084c46bdc0370088df1dc269f36d0",
".git/objects/16/8c1c748ffaa3d86e3d38c425ce73c4c0e7c8bc": "8022f4c4dfea96455af2cd23887a42a5",
".git/objects/16/a7450e92820ef395d8fd28f2060de3ad0ebec7": "fa33ee105b78480520868080bb894c83",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/1e/9d277720bd7200fb1b00d41417a3ca50f1bf01": "510401cacb7f914c4c2c85e2c39dd1d9",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/caec42d16fcc908aec0dbae1b9c9cd059b5e66": "b2b1e3837132fb3f3956ecdbc28c9e8a",
".git/objects/23/2409ed1ea6d4e44911482f62051927052b3e5d": "86534bac767d37d5de9dfc5376f911fd",
".git/objects/28/a3d2fbe022fc52842876e9f1f1040f4731cb70": "b9a5d5597b0588623f83c6445cb839a3",
".git/objects/2b/0b8327e4eda53415c36c80509ba79da6e30770": "81b0de1dd2167026ad355880af5d9fbd",
".git/objects/31/92ffa1de8b436c6682f4935e79ee8f550dd9e7": "fb7330e874d921660e32cbb916ef21ca",
".git/objects/35/de65d3223c4bdc17b3556cd41748045f210d77": "a73621e64c8f6bb8ea63b252d144cb19",
".git/objects/36/7d2d054b964cdecb9ead671461bb518b2b4ef6": "a216fd3712badf598d966299969f6d85",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3d/9df2786d590b22e5ccb4336ecca699d15ea78a": "e548ba2caa48c092cded8fb3307e5dcf",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/42/7345b698f6608efc685cc514fadab4058b50e9": "a1ef4787015c8903893f32cc6ac31f6f",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/44/095ce4659b52c5e9a1d9d146d5076ee387e7e7": "c0593f5ce17ee771b1b50a721e977b0a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/886fe811532957b6e0f4c8b4d111103f9d0179": "925d730c104383c3748d44baf445070e",
".git/objects/49/baf2f5130eaf4076a06ff01588c00c53105edf": "8209b40b9106186918fb256f87ff7737",
".git/objects/4a/5d594c6441b420dfd5059ad34f796f84c96740": "a156b87148db0ef42f2ce97fd43a0ada",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/51/13c62c8e86d80b421240732e8aeb2f7b6b8b29": "8b29d87075f90bb6e719589deda0d05d",
".git/objects/51/6f7c85f145e9d4f7c5a1654cc07d724e133f5d": "ff14bcc2159a743e8692da757c46046f",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/0adab60eb9244ac24dfb07966fe3f912cb3e1c": "c76eb15231023b6cfb754c424d8d9455",
".git/objects/58/2d0d69b4a3d969378f24369779aad36b0fb940": "44f91b17397635d2eb51549042608950",
".git/objects/59/5cd077d9f90449666950178c32f88abac04994": "39c2c4ac16510dd6c494892c88d810a4",
".git/objects/60/ede8131d94c8562ef68f4ddebf6fafb316e544": "8e33513aca7bfa9d78adc5eff835b589",
".git/objects/64/7d7b5403ca151236aaa444aeda6aab9199cea2": "55a3f074b62b91e1710e23bf6c2469ae",
".git/objects/66/d6675135774c4b5652f1312c7e96680dc0e126": "8d81c06f4841aa727231ce54614cfc15",
".git/objects/67/8c44c7561f1f96ec2c8f5f8c09d41da01bfa82": "04b322bafa742019b626454997b3ae96",
".git/objects/68/6a5b237f75953de23cd73fd5873f0711ee57e6": "54a0f011d96ca5bcf199acf79300d3c7",
".git/objects/68/dea2b38c55857a193c81b9f9a74456037a9180": "d13494bb2ebb2aea932663facbdfb4cb",
".git/objects/69/e244d72595456c73766fd8fde74d925237dc09": "981107657605e8e072d39dd975fd96f9",
".git/objects/6d/54878959c9abf3de531a67f0418e4ef7aca679": "ee3937c74274a939a91cc71f2a844989",
".git/objects/6d/ba4ef125af82d5884b036f4b7d51fe03c3b7f7": "0d0120f50c32987c87ea1bb28b546ae0",
".git/objects/6e/3d661b0f93396e8a8e44b9b7094c7e239a644b": "8ff441cfe6662e7bbd5600a2994f0a45",
".git/objects/70/118fddf0b8b95bfdb2873c2d8df0b86ff6f29c": "1a3cd9d5fa7c28ad28a14cd1b6986cf1",
".git/objects/70/a9ec0dc00aee101309e18319ab6989b996794f": "88465c8884a5f49f9d7219a9bd19614f",
".git/objects/75/5f82d7fce42348a3e535f68af7ac814803cfc1": "4bfc1782453c37e26003390e3559f47e",
".git/objects/76/041583abed0e016269278938f5d5a78909dfe3": "1d5d1f3f77cd0fac540b4bd6425a76e2",
".git/objects/76/5356e92231ecc31f0eaebeda4f9c5a55b70242": "178bdd40e02623e8efb03f626ab4947b",
".git/objects/77/64484d460bc2e825db2ab0bd64f071cb40edb7": "2ff94dced347d5fe6eada549b0d31139",
".git/objects/78/2aa5e02b19d646b750b078d18b9396609e886f": "a228525937f39ca6888351dae0097ed2",
".git/objects/79/0dd93b2f76e157fdb20105f5bdf28f2ce49548": "e8aa1c4014274052d5277c8c8b67de06",
".git/objects/7d/6e34251ccd87ed216cb0a8dfdca0a8b9f863bc": "b7e8e887a8147cad52e92942848b02ed",
".git/objects/7d/e808462dfe71872a2aa5cff0dcd1ab8d1d518a": "d9e64799cccb0cbd1b937a5e94ca5ae2",
".git/objects/81/e4e6bf0839d82a244acf7d75b28088c7b8eec9": "77e42b96bc3402e35157628aa42cce9f",
".git/objects/83/f9f8be792630776e742942b05e7d416280b817": "a750e8b6baeac2d77ebb5cc1e923bc98",
".git/objects/87/6a0721a0ae18a860c9c1083cf2831309329ef4": "bad3d1b2ce47869e24c99f81379f2567",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/6b9d55e338ff0ca14e7437b28b839bf3948b49": "8d0a0256d35c4039373adc744745d49e",
".git/objects/8d/4597eb3cb10d630f2ec1266c581def34023aaa": "07114664843beb281ada8cd87ecb964c",
".git/objects/91/2ac12c5b4bd59e538d4fd24c571c3313067f40": "78ccd8a702c5b5ddf41b02d97e7e7ee0",
".git/objects/91/34b917c228489ea0521ad8292afd755d1a9ab7": "f8e1be18d2bb0bca6a3b13045f8c1157",
".git/objects/94/24812b5424f791862321ccd5d4036d63eee4af": "4b5c56663c7eaf4c5861dfbebb26f2c5",
".git/objects/95/8ba030073f830d9b35f9df6f648bac25c970b3": "111c3f1c45fc7bd6061f4b9cbfa2e3d2",
".git/objects/96/d27c62fb8296e1e377656d49dc362def217bab": "b6f99030510a5d6a7bac68ac60f4aea0",
".git/objects/97/4d22281e7bb935144e5b94aaf86ea5f4ab12fa": "17f458ecfc2c29e4829ee0ce270be82b",
".git/objects/97/8b4b2ec45b2e4063441fd21e2677afd7c9e022": "020322bed6d2c34f809cc5fb31eac241",
".git/objects/98/49940dd1a996cca09b655605005498e86f8ad8": "a858813de39ee0ce8d0e2d61f115b449",
".git/objects/9c/35cfc222effd93cf59137088e3db647ad2d40e": "f15d508b6bd17797fcfda4d1806f573d",
".git/objects/a3/6422ba189340a1029ee234b6ec5d8fdcbff82c": "2568e9c3239de8e0ae026d96dfc76b1b",
".git/objects/a8/8555307fbef4641aebdef3b9f1382c13e36476": "272b7d928bab1f0927fea49d967d7b8c",
".git/objects/a9/925e6915de8d62e37fa0fbda3ccd9385baae98": "9d02dfb0467ec28fe363f99e9e1f6d97",
".git/objects/aa/a1ea17f58c7d810c862ed2329ffc704ecf5150": "e9f5bbf848b28d74e008a6c2f27a92ce",
".git/objects/ac/b3281a6f5d1e8ec8dd9c25faeb50fb0b224f45": "0cbd8bd81c03d852caa3d77385e162fb",
".git/objects/b1/1713dd73083c069cad42b04666298fe4af5c14": "4e996ec6ba45ec57cf829da62af5d411",
".git/objects/b5/8496973b05db911ed472441d1b2477945848d6": "f7279447efc9936fe13b229618afa537",
".git/objects/b6/2840254edac36e31dc4e9d98a5be63d0dc0690": "845ad123af036a2252fea21820a5f0af",
".git/objects/b7/1d336e4730f2ae665810ebb99d0e88a1477d9f": "7ac8dc9e13d5b2090932268ec320225b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3ded8afa8287495012139d50753eb944f21da5": "fb1f8d62db61ced3727c4f1c7616eac9",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/e54f58585be7d6b8fd17a6978bc2df6e3d533b": "9d1ccccff66a818db649838379ab2db6",
".git/objects/bc/da388227f6d0f43ce41fcd8b5fdc91a82bfa13": "a9fcb4a9f5e75aad326fb462e7f72601",
".git/objects/bd/6c51319fc90c26f96b8e073c3ba4774fbe372d": "c3beaae04c0b4dba92a90c409ee919b0",
".git/objects/be/df3e3ecc3906f6ffd3d4e63aee1bdeb54a96d6": "94d1967b26abe732b738cac621f6846e",
".git/objects/c4/6008a98da5ba3c6e74ec74861981c2dcbef553": "7b82a8d2d238ca02afeb20ea9a00bcb7",
".git/objects/c6/7d4b2c2c541cc6e6609ff4eb24f91408e632f9": "d11934af5d07b967ebdc2048c93078a9",
".git/objects/c7/33d605010f11b95602a1c44dd1ff671dc50c40": "62f448b7f7dfdfdd8bd6a17e95f847dc",
".git/objects/c9/23bc81027ba914d488d6eaeebac03d536a5555": "3410ffa8e2fb1e73bfbb279968173d0b",
".git/objects/cc/cf463e4e7a2a4096a6d376bfc08f2a25b86267": "d2d6b30d1f6dbf2d82a4929d55c6ad57",
".git/objects/ce/40e734afccb4b853b3f4c268d56d78f44f3760": "728e24f51e385a0a7c8e4e08a37de31b",
".git/objects/d0/1c2e6dbc5b7cb6d8085e31c62b88679d9a42e8": "52ca138cb90ac2520a9db0dbca5dbecf",
".git/objects/d0/f06d0e28d8305e7a48b36dd82948222dd6df00": "a687a7b3046f5a05ab4cf6dde1e84686",
".git/objects/d3/d92b131628cc8645a2166cbeef5ef6691bf6fd": "a73c841970af978529f3878108b055db",
".git/objects/d5/048f07b9238e73952f54d5b58dc7953f01ef89": "b28a3effd96029952a2b3939f70720d0",
".git/objects/d6/1632ba852f8721e1fbfc46efbd0d9a382fa63d": "0e67f2612e0cad24d8bb10c9da38b72b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/aabb5721a9457f827313fd5ae009823297c6f6": "8d1fa6fbf7be468c672ca4a65107531c",
".git/objects/d6/f45cd8774ad2ce5e1042fb79e08daa9f70f30d": "7867eaf4581fc0a5768e8eb7ab1a6b5c",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/ceab33d72cebf587f070f3d1d1ebb9a472d580": "920eeac227b3c7260d544c1b6fd8d967",
".git/objects/d9/55a511f625c549e77e809c668a73b8e1938871": "64717b89ee16930f808b5ba38e0689a3",
".git/objects/d9/9068e8c08f34e9b56679291f79f1a91a24f712": "76f2e235a47954cbe7a7b7e4a41dc66e",
".git/objects/dd/1a76e30ae38a8761281a5f7e290f92a9aefee2": "d3f2123ca2fd471b19f9a0cb79918643",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/de9c9513bc5a835a7ac50531749eaaa6cf711b": "69a263626c115c4a14471322d20736b7",
".git/objects/e5/9d11bf2d7912000d10c4ff38e81bbc416475ab": "56343878e97b1876f61daf0fa8c58e64",
".git/objects/e5/b7e5f6d7c322dc48083a8b2297d949ffb71f10": "38a8c043e91d00db22e7224d2bdd5a22",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e6/bef159098d63008b23b050762d85073144d1d3": "31bbf73f845fc47ddc1777b608173057",
".git/objects/e7/ec140453ca0b1f6933ed0b3361dc8e77cfc20b": "4e3987d6f12a919a71ba409ab42f2966",
".git/objects/eb/2ead83994c5f8a7779d99b666a3aa3a9ded098": "d999a752cef2c503f3b7bd10b4875505",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/6cd5d0e0b88f6d044dd3f7cfe68290ba5d4e6d": "b45700018a3a80a0495a07fcd41c4f7d",
".git/objects/f2/66458da7860d3cc0f9c269ac53fcb464e2a26a": "7efc0255ea0c44ed67397c7468a84854",
".git/objects/f4/8d7b613df9612bc7b4c9df98fb1da091962e8e": "a73e4eeeb748c03ce85abdd80bb41b48",
".git/objects/f5/c102c740cd9a6743a0ad25771ce0f240a95039": "c6b18c8081f16bc705cf9693f883d68a",
".git/objects/f7/de856c28fd054d678c914e9585288c04a705de": "de25e796b10f71f6b61c227e990066c7",
".git/objects/f9/91b83b878dce9aac307ae2eb3c15b68096357d": "8f7622ad38371cd190679394022ac04c",
".git/objects/fb/8011153afe4d08c8f5351e5de659252512e640": "b56ae08f48c5f98d0b38b7e6d8b9550a",
".git/objects/ff/0ede9f987cc39626c0a5928e326b0202e8a5d7": "483fc26b0e08746d9fadd5f86110b193",
".git/refs/heads/main": "e81ceba3547cec7168fe576212a985f2",
".git/refs/remotes/origin/main": "e81ceba3547cec7168fe576212a985f2",
"assets/AssetManifest.bin": "29a41962e5798b8bdf5f31ac194c240d",
"assets/AssetManifest.bin.json": "ad66dbbd01e032b464d18a2b99e01cd9",
"assets/AssetManifest.json": "e64678c077fd0d6de13d4dc8c98e1285",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8a356c45e2a09d119eeebb25abed4513",
"assets/images/avatar.jpg": "9378105334882dd1f615e482d940b595",
"assets/images/baby1.png": "afd4610fefe125e32b479341d9b5c5d8",
"assets/images/baby2.png": "0e47619a54bd13c11e4570b209b698ab",
"assets/images/baby3.png": "2ff990e3abad5ce017a1010d8753504b",
"assets/images/card.jpg": "194684b03b6890b568a38c22f1a9deef",
"assets/images/event.JPG": "2763c2e33aa52077569a3c0b4b34b716",
"assets/images/file.enc": "77e9281dfce84b97ccfae375730f0613",
"assets/images/grade.jpg": "475910f1db50f37e5850f3e2b30e7e1f",
"assets/images/grade2.jpg": "9fa1eb7d8974b54535d996b092169f0c",
"assets/images/last.JPG": "6281e419ae7ad0b6f54ad9d1a76710c1",
"assets/images/loader.gif": "1006303ea78d4f023b5a79725ff985ca",
"assets/images/loader2.gif": "e2748a3cd63fb123a6ac75ab04db00e2",
"assets/images/sample.png": "e262afdc98e831b27d560cc8c2d1760e",
"assets/images/super.jpg": "84b4d2bb6fa28ada7cfb13f23dc76854",
"assets/images/super.png": "e82bbea6de7bc3b9aba287541f7775c6",
"assets/NOTICES": "d142f61157ed127ae6ba58eb12a9f64f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b0ebdd9fe3a55193c225b5401423a4b9",
"/": "b0ebdd9fe3a55193c225b5401423a4b9",
"main.dart.js": "089afa5ac7c16717f66c1bd9263d085a",
"manifest.json": "7d7bbe30c5473c684e1da9e7bc0b4199",
"version.json": "a061dc5ea415576f62ea7daaf8faa467"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
