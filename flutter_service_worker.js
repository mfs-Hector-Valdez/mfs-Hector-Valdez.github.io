'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "23861c0ce82b0eda4a428217f1b3d3a7",
".git/config": "bbca87c276483c0de04ad5c91310afa4",
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
".git/index": "13b3c5434bf572a720aa48045ddc4580",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a84662350d9a6c065222bb08513cbf7d",
".git/logs/refs/heads/main": "38da0409edfc3170cc7a2ae387072e00",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/0d/e29f8c74a31314ef4a1b542d15d26504426b77": "388d16cfaa04e3e0fe436c5ce58494b8",
".git/objects/10/a5f79c985351a50fd416a3460549e3784e5fc8": "de20a67538fc70ce134475ae6f83d473",
".git/objects/11/9837f20aa588f4aae8ddbcb97c079d8f98af43": "25808ef7a84983c5ea799c1a6ba6e8c1",
".git/objects/12/5608ef88ce936c0183cbb1b0ee886907f06855": "42e48ed8d9dc388c116c007ce5d9f97c",
".git/objects/12/b7b3c40b5c8dd7d90968d43bac7bc673a6c221": "c1ae18fde79c24e596087332de9a1b13",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/1d/95e5da9c5a8404a1060483350d2d11f63f7c93": "e767b15f91bff68dc931bf5b9346c6b4",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/2b/d4fa9ec878128c37c872c4d320763cba031068": "fc87f7ddcfd132c5c065699875971b6e",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/32/2ba6bf6e7c60e7f1d139a0f042345f722ecff9": "d07131226d0c91ce5d964871c9b59a43",
".git/objects/32/a33d02d09a1ec38ecb39663c023422774bfede": "5fb54119dc124f46d19093aee4e29bd3",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/35/d39f8c2815673a91f8cd375803dc8b421fab05": "32cc282ffdcc9b8b384bccfab3c9b2b4",
".git/objects/36/38e4f3e31a723023883c1308a27fbc8cc13773": "bca5f8688ee54325dcd0d8a25f0f9400",
".git/objects/37/42457900d51ae5c34ed53657ed8a72f17f19c6": "14c972e5155e5aa3bf2db2ef8589e81a",
".git/objects/3d/6861b42396c609e26f38f129383c558e332281": "5094a76191110339c6815fd8ca04f5b7",
".git/objects/3f/7acf6b8fa61b0a45a48eb8879a3635541e28ec": "39af560316cd8255ae40e561878c6130",
".git/objects/3f/a7ab7ba4dfd4e58fa5e49223e30c12d645dcf2": "d74774ab8c0c294c09d9ebeda1851066",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/41/769b8c9c9798a4e475051eff75ce5652339d0c": "1a2152f8ec1e08f0f885a44d3a5e3bb8",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/43/4e947e1727fe018ef05cc22b233cbe9892cd9b": "837cfa3cffadaf757aef59244bd09052",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/45/08e09dfc0a8cda418d91e0f42257d3140455d4": "0497a5cb91d2216e3769f69082d46c5d",
".git/objects/49/ae62fd594ae84576081b6b94094ccdefda93c4": "d189bddc04b41bd83210eb1292a96b62",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/4b/25522826bd823160e9becaaf6db08f2503cd46": "9aa5cbf43761efa4d09a37e4e8db50fe",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/50/a0e140cd74fb1a750a214541069f45ec8c2bd1": "6ae001f7592cd55811e4b4834451da95",
".git/objects/56/1f1be91dea586cc7a1c729717be3bb2ecf7231": "868670a94e5719a9cfa1618859a31403",
".git/objects/58/ca55e79714d8254ed43462fb1be1070c32eef2": "1c09d564f0350d6f25d6f58e56286033",
".git/objects/5a/17cb8cb539f59dd79892494481db5bceaa5679": "7e95dca7cdef053cc0e4b4b89347e004",
".git/objects/5f/89ef52c9d388ee641df9682e8401e47da85284": "311e5b70b81dd1ae8339a0d765339469",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/6a/df83716fafa278555039787a0318478b01b083": "9540f70370b04e09fa60ff6cf374d05f",
".git/objects/70/dead79c917f34633455a2bb7d37537d92018df": "f8739b69eed12aef927f43447c2ad1f8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/4767ba7b502dc48fd41b7a853274e4b8e4222b": "59087f6fbf2f2ef64200b305b415cd4f",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/7b/74559004fd4894f60b9d27221f6e8572010e3c": "7a56c9e51bb8c8efc147398608e8281a",
".git/objects/7c/4699f7a37dcf169a5a64335a1f8dd8f232a736": "1c36240ffdb8a48767becf33aa911e69",
".git/objects/86/8acc1493df4b68504e4efbac2cf91743624686": "a28b8759ca8f6bc40adde9e97ef474d7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/5c6e7edc170d4a5412c183063cdbcc2bc6232a": "d07f22b18a6c6ecee06ffbce8b3578c9",
".git/objects/8d/41b7a74560dedc06d2ef956ddbf2e515a0db92": "d6e588a09bb94ed43957f458a96939d6",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/8e/b407b205ce3009b202d1772c054dac742eaf41": "15ab23d73e4288cb3696269c6e43c820",
".git/objects/93/4d8ff669fa36cd3381c18166765107c31cf6a7": "13488ae7fa22dc0fc13770df98732a54",
".git/objects/99/ff896a83b71885e168e61441569567a98233bd": "91638a088f74b0bd1cfd13d1b77c921b",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/9e/a084b132ab0eebfdb3ed4964cc5f2bbcda6c8b": "b20d97718af2fbbdcb65e0fb6c0bba7e",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ae/f0c1d97c92d8346d305466500dc9ccfab7f91f": "732b62857576710e4e07e5721067aa0d",
".git/objects/b6/d8b8611d28f955d98192c638bd00280fe02334": "7bec8cb62dfb3ccb75a3bed0ba62fe09",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/65526a84296cede04b5a9411d6565641222a13": "2a900f71febf35876edb488448edd0ca",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/c1/aa86489b2af6b81b7c410dac30823f4ab4a1d8": "8e6add32d1f8442b31d26ff26aa47df5",
".git/objects/c2/3e8a02dc841f85e2ae3ec8e5aa186f7f44ccab": "0091ec9a53712a31b8304e837289485d",
".git/objects/c5/559139184721649834673c2b5c16ac546f259e": "b7757cdd2dfd41cd19c53c3a41827f9f",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/c6/fa452de2df14a86f48beacd71ff93b081c90cb": "4e1ac8897732e3a34f855b94e73c7c2a",
".git/objects/c7/4b1997c39af398c13005dc48c6adb8d2723a40": "c5849164d42bd6cf23ed2377d0bdafea",
".git/objects/c8/93132c7c8fd5dfe580093b9479b0ba0d3256ee": "ae6327499b0de2ea42b0c6803d015b12",
".git/objects/c9/df607a4d373e3468599aaf6d96823459a4f6ec": "d538f96556dc091762327b03d25a0618",
".git/objects/ca/d73f073f3f34ac72a31f79166a5a916e8519b6": "10f7d43ee9a5fe0b1e8a49c28d318283",
".git/objects/cb/244676da959742dd0648cf856fabfe754d950b": "cba82430aa025bc577658529ac98cda4",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/db/2aa0eaafe91aebafeb192b3dc7bc9a5916e9c8": "a9a6336d8bf0fe07095e51c95609c571",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/8a38789eb4cfab51b87722142c795e18628018": "9d5ba48842e9e5c2f8f3929ff5536dcb",
".git/objects/e5/7fc4d05525c3b2324857630f80649cec2761fd": "fa675e4822fd28f6f5fb3a71e9e292fd",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/78cfd2353d8b750dbe77b9a584fc45bf425da9": "9793a0f8c96b65601fe3223ba42b6dc1",
".git/objects/e6/9e33b333aed8d9eef5466d23b3395387848e6e": "799870adeedf2bcc61dfd246fc16e214",
".git/objects/e7/0172a067fd15966d7a40fe245db4a9e4940c46": "de8a625595b9faadb899a31497b5b001",
".git/objects/e7/6d55fe188016efcf2bd7d273a0661c91b4bfac": "49ce56c69eff83b923a57dd6584be0cc",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/e8/7741bea0a16c491772f185c22bd2262997f1ce": "678e08e96803a6faca3e432af906fe3f",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/e8/baf70fe30426cc1bd070f8edd238b71cdbecfd": "508d6cc6f24cee34aad625d33c2796a1",
".git/objects/e8/c504efff6ab56cb02dc8c55736ac89a6510265": "8839671374f5f8857dd297d9d52f744b",
".git/objects/e8/ef9b5803a7b0ef818cdf6ef5c7c301f839bf8c": "3de0b4a9ca1c5671b175c171f169e7a7",
".git/objects/e9/c6bea05e44bf36537cc6f916a12ae97e0cae99": "4e9a05d438521d61fa87951b9e608299",
".git/objects/eb/06f2deebf020cd19ab687ceaf95258eb4442f7": "2515576384bf4f5038b620cfec3d7b8b",
".git/objects/eb/1e8aecddf69279c2d5644fe751da3784916591": "b3978216b103814e78e2e598543d6032",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/40aa3ae190d5d609af4016f4c54a29b9dcc06a": "f48394fada593da04bf7bb5043f82c81",
".git/objects/f4/0983993658d8acfde41bcb012f746d93f66b4a": "63c4d304e6d982c99cc1148f00a60b2c",
".git/objects/f5/dac8dd586bd7b10c096b7fd9a0c332bbd189fc": "d7fef6fe2201a5a7f1b0e1d129974151",
".git/objects/fa/498a2cca415faa0cbfb7921b6699c8dd2edd5e": "70d479efec33dd0658447f50541fd625",
".git/objects/fb/4f9001c36973f6dee659df4a8e271939fc0e0f": "21d0dd2aa266fd3a11cac7ffdee051bd",
".git/objects/ff/06f296f7f77bbbeb164784875142da675c1de9": "11aff46f61fb2ff8d471e58b3559e2f6",
".git/objects/ff/581d12f42fe202070fa4081e7b11b2da4949c4": "d81213f34cc3798290bc99aecdf57a6b",
".git/refs/heads/main": "3943bcf452b70c3a5d67b354d343213a",
"assets/AssetManifest.json": "2e035455a7fdbda35fdf2ddb77c0714d",
"assets/assets/fonts/google/DMSans/DMSans-Bold.ttf": "b9cec5212f09838534e6215d1f23ed55",
"assets/assets/fonts/google/DMSans/DMSans-Italic.ttf": "1ea925903e098f94f5c51566770a2da8",
"assets/assets/fonts/google/DMSans/DMSans-Regular.ttf": "7c217bc9433889f55c38ca9d058514d3",
"assets/assets/fonts/google/NunitoSans/NunitoSans-Bold.ttf": "4aa57ec2fb7650165f1f2fef64d61b2e",
"assets/assets/fonts/google/NunitoSans/NunitoSans-Light.ttf": "b73b535f97c0f02d92a0648e8ebc10fa",
"assets/assets/fonts/google/NunitoSans/NunitoSans-Regular.ttf": "05f376c99895ad997a49c579d385d589",
"assets/assets/fonts/google/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/google/Poppins/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/google/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/google/ReadexPro/ReadexPro-Bold.ttf": "ac0c6ea345ee1458a5a494eb5b93339b",
"assets/assets/fonts/google/ReadexPro/ReadexPro-Light.ttf": "19163573ef925d255a75332bdb7029a0",
"assets/assets/fonts/google/ReadexPro/ReadexPro-Regular.ttf": "3e24f02a8927ee17ed6d329ddb0d8de4",
"assets/assets/fonts/google/Roboto/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/assets/fonts/google/Roboto/Roboto-Italic.ttf": "465d1affcd03e9c6096f3313a47e0bf5",
"assets/assets/fonts/google/Roboto/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/assets/images/accept.png": "88cfb30a03f1ef086143f26bbf622517",
"assets/assets/images/bell.png": "daf659a8c119e0fa4ae819e65c5f235d",
"assets/assets/images/calendar.png": "0975682aa269a77f153202381c7a8c61",
"assets/assets/images/calendar2.png": "b68cd421178d0c22c1b9efaed36d372d",
"assets/assets/images/clock2.png": "5fa0b34278aa2326a9189a6f5371bace",
"assets/assets/images/comments.png": "872df399a633922fe212dae4d4676255",
"assets/assets/images/consentimiento.png": "80c4c16f4039926a4e1ebeef2d2accee",
"assets/assets/images/Error.png": "ed1dab82baebc547aa3924c8c0a387ba",
"assets/assets/images/evaluation_watch.png": "917fb506c64f1f2c7615362d15ce96bc",
"assets/assets/images/file-check.png": "e750f7b4d73bc892f9e72c142743111f",
"assets/assets/images/folder.png": "1005c232ba93fd8ebe4b8a3b76dd5f52",
"assets/assets/images/happy_man.png": "ac1ebfba8a204109e5ff94a9356fab2f",
"assets/assets/images/lending.png": "c83bcd78833d4e6a29c58e9e8fa39d46",
"assets/assets/images/lending_header_female.png": "cfb14384ef1a15b1d77fc34c152cfde8",
"assets/assets/images/lending_header_male.png": "bf6739b5fc2f872ed6b581907ca5e10c",
"assets/assets/images/llave.png": "790f555af3f63ebc51ea3bd9705b2850",
"assets/assets/images/location.png": "93b9c06197d4e737dd97db8b5a86d8fc",
"assets/assets/images/luckybox.png": "1cd828ec7b4ba83219fbcee1c1ddde9a",
"assets/assets/images/no-image.jpg": "335ceba57475f3c45f0d82f04b987bfa",
"assets/assets/images/pencil1.png": "52415f8eb3872db2273cb3866e0d30fb",
"assets/assets/images/prestamos_header.jpg": "8e3d4afc25498f07f9384d0ec1d38079",
"assets/assets/images/prestamos_header.webp": "b853a84189f3f5498c0d35d156bcccde",
"assets/assets/images/PYG.png": "5e7395d33f403558a4d4f5521287fd21",
"assets/assets/images/rocket.png": "4d830a40f212e2aa49ad375889c48b2a",
"assets/assets/images/sad.png": "1a31b1b21e2399d747e557840fdfba74",
"assets/assets/images/sand_clock.png": "924ac31c33d6aecdf2ef7f0c056a8c4d",
"assets/assets/images/vector.png": "2cec38f9313337b271ff28a9721284a5",
"assets/assets/images/whatsapp.png": "02518bd443ace9748430ab5665c08e99",
"assets/FontManifest.json": "4c78f096763398edc45467503aceebad",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "5ade9a66410d51f6b4b1aca39bdcd72c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ec6db33ad92ef355a6a933e9a58d3ac8",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"channelscript.js": "538e277750f0d197b25e69b737d811bd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/icon.svg": "f00c371bbd31f1d3c0a3b5254f4eefd2",
"index.html": "d05eb6566d9c710fd4436929df831719",
"/": "d05eb6566d9c710fd4436929df831719",
"main.dart.js": "bf3bde6545deadeb5ed7d1c8d7101366",
"manifest.json": "3a3bb7929e3706363c93856284dec61f",
"version.json": "f4d4d9dbc3f8612e04b08b0dd8260251"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
