//Mon Sep 02 2024 09:25:05 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
ENV_ADDRESS = process.env.ENV_ADDRESS || "http://pi.wizardev.cn:82";
const USER_AGENTS = ["iPad;3.7.0;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;2346663656561603-4353564623932316;network/wifi;model/ONEPLUS A5010;addressid/0;aid/2dfceea045ed292a;oaid/;osVer/29;appBuild/1436;psn/BS6Y9SAiw0IpJ4ro7rjSOkCRZTgR3z2K|10;psq/5;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/10.5;jdv/;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/oppo;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; ONEPLUS A5010 Build/QKQ1.191014.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "iPhone;3.7.0;14.1;59d6ae6e8387bd09fe046d5b8918ead51614e80a;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone12,1;hasOCPay/0;appBuild/1017;supportBestPay/0;addressid/;pv/1.26;apprpd/;ref/JDLTSubMainPageViewController;psq/0;ads/;psn/59d6ae6e8387bd09fe046d5b8918ead51614e80a|3;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;22d679c006bf9c087abf362cf1d2e0020ebb8798;network/wifi;ADID/10857A57-DDF8-4A0D-A548-7B8F43AC77EE;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone12,1;addressid/2378947694;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/15.7;apprpd/Allowance_Registered;ref/JDLTTaskCenterViewController;psq/6;ads/;psn/22d679c006bf9c087abf362cf1d2e0020ebb8798|22;jdv/0|kong|t_1000170135|tuiguang|notset|1614153044558|1614153044;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;2616935633265383-5333463636261326;network/UNKNOWN;model/M2007J3SC;addressid/1840745247;aid/ba9e3b5853dccb1b;oaid/371d8af7dd71e8d5;osVer/29;appBuild/1436;psn/t7JmxZUXGkimd4f9Jdul2jEeuYLwxPrm|8;psq/6;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/5.6;jdv/;ref/com.jd.jdlite.lib.jdlitemessage.view.activity.MessageCenterMainActivity;partner/xiaomi;apprpd/MessageCenter_MessageMerge;eufv/1;Mozilla/5.0 (Linux; Android 10; M2007J3SC Build/QKQ1.200419.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045135 Mobile Safari/537.36", "iPhone;3.7.0;14.3;d7beab54ae7758fa896c193b49470204fbb8fce9;network/4g;ADID/97AD46C9-6D49-4642-BF6F-689256673906;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;9;D246836333735-3264353430393;network/4g;model/MIX 2;addressid/138678023;aid/bf8bcf1214b3832a;oaid/308540d1f1feb2f5;osVer/28;appBuild/1436;psn/Z/rGqfWBY/h5gcGFnVIsRw==|16;psq/3;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 9;osv/9;pv/13.7;jdv/;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/xiaomi;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 9; MIX 2 Build/PKQ1.190118.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045135 Mobile Safari/537.36", "iPhone;3.7.0;14.4;eb5a9e7e596e262b4ffb3b6b5c830984c8a5c0d5;network/wifi;ADID/5603541B-30C1-4B5C-A782-20D0B569D810;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,2;addressid/1041002757;hasOCPay/0;appBuild/101;supportBestPay/0;pv/34.6;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/5;ads/;psn/eb5a9e7e596e262b4ffb3b6b5c830984c8a5c0d5|44;jdv/0|androidapp|t_335139774|appshare|CopyURL|1612612940307|1612612944;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;21631ed983b3e854a3154b0336413825ad0d6783;network/3g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,4;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.47;apprpd/;ref/JDLTSubMainPageViewController;psq/8;ads/;psn/21631ed983b3e854a3154b0336413825ad0d6783|9;jdv/0|direct|-|none|-|1614150725100|1614225882;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;500a795cb2abae60b877ee4a1930557a800bef1c;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone8,1;addressid/669949466;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/9.11;apprpd/;ref/JDLTSubMainPageViewController;psq/10;ads/;psn/500a795cb2abae60b877ee4a1930557a800bef1c|11;jdv/;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPad;3.7.0;14.4;f5e7b7980fb50efc9c294ac38653c1584846c3db;network/wifi;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPad6,3;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/231.11;pap/JA2020_3112531|3.7.0|IOS 14.4;apprpd/;psn/f5e7b7980fb50efc9c294ac38653c1584846c3db|305;usc/kong;jdv/0|kong|t_1000170135|tuiguang|notset|1613606450668|1613606450;umd/tuiguang;psq/2;ucp/t_1000170135;app_device/IOS;utr/notset;ref/JDLTRedPacketViewController;adk/;ads/;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;19fef5419f88076c43f5317eabe20121d52c6a61;network/wifi;ADID/00000000-0000-0000-0000-000000000000;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,8;addressid/3430850943;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/10.4;apprpd/;ref/JDLTSubMainPageViewController;psq/3;ads/;psn/19fef5419f88076c43f5317eabe20121d52c6a61|16;jdv/0|kong|t_1001327829_|jingfen|f51febe09dd64b20b06bc6ef4c1ad790#/|1614096460311|1614096511;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;12.2;f995bc883282f7c7ea9d7f32da3f658127aa36c7;network/4g;ADID/9F40F4CA-EA7C-4F2E-8E09-97A66901D83E;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,4;addressid/525064695;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/11.11;apprpd/;ref/JDLTSubMainPageViewController;psq/2;ads/;psn/f995bc883282f7c7ea9d7f32da3f658127aa36c7|22;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 12.2;Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;5366566313931326-6633931643233693;network/wifi;model/Mi9 Pro 5G;addressid/0;aid/5fe6191bf39a42c9;oaid/e3a9473ef6699f75;osVer/29;appBuild/1436;psn/b3rJlGi AwLqa9AqX7Vp0jv4T7XPMa0o|5;psq/4;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/5.4;jdv/;ref/HomeFragment;partner/xiaomi;apprpd/Home_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; Mi9 Pro 5G Build/QKQ1.190825.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045135 Mobile Safari/537.36", "iPhone;3.7.0;14.4;4e6b46913a2e18dd06d6d69843ee4cdd8e033bc1;network/3g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,2;addressid/666624049;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/54.11;apprpd/MessageCenter_MessageMerge;ref/MessageCenterController;psq/10;ads/;psn/4e6b46913a2e18dd06d6d69843ee4cdd8e033bc1|101;jdv/0|kong|t_2010804675_|jingfen|810dab1ba2c04b8588c5aa5a0d44c4bd|1614183499;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.2;c71b599e9a0bcbd8d1ad924d85b5715530efad06;network/wifi;ADID/751C6E92-FD10-4323-B37C-187FD0CF0551;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,8;addressid/4053561885;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/263.8;apprpd/;ref/JDLTSubMainPageViewController;psq/2;ads/;psn/c71b599e9a0bcbd8d1ad924d85b5715530efad06|481;jdv/0|kong|t_1001610202_|jingfen|3911bea7ee2f4fcf8d11fdf663192bbe|1614157052210|1614157056;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.2;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;2d306ee3cacd2c02560627a5113817ebea20a2c9;network/4g;ADID/A346F099-3182-4889-9A62-2B3C28AB861E;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,3;hasOCPay/0;appBuild/1017;supportBestPay/0;addressid/;pv/1.35;apprpd/Allowance_Registered;ref/JDLTTaskCenterViewController;psq/0;ads/;psn/2d306ee3cacd2c02560627a5113817ebea20a2c9|2;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;28355aff16cec8bcf3e5728dbbc9725656d8c2c2;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,2;addressid/833058617;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.10;apprpd/;ref/JDLTWebViewController;psq/9;ads/;psn/28355aff16cec8bcf3e5728dbbc9725656d8c2c2|5;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;24ddac73a3de1b91816b7aedef53e97c4c313733;network/4g;ADID/598C6841-76AC-4512-AA97-CBA940548D70;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone11,6;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/12.6;apprpd/;ref/JDLTSubMainPageViewController;psq/5;ads/;psn/24ddac73a3de1b91816b7aedef53e97c4c313733|23;jdv/0|kong|t_1000170135|tuiguang|notset|1614126110904|1614126110;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;d7732ba60c8ff73cc3f5ba7290a3aa9551f73a1b;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone12,1;addressid/25239372;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/8.6;apprpd/;ref/JDLTSubMainPageViewController;psq/5;ads/;psn/d7732ba60c8ff73cc3f5ba7290a3aa9551f73a1b|14;jdv/0|kong|t_1001226363_|jingfen|5713234d1e1e4893b92b2de2cb32484d|1614182989528|1614182992;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;ca1a32afca36bc9fb37fd03f18e653bce53eaca5;network/wifi;ADID/3AF380AB-CB74-4FE6-9E7C-967693863CA3;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone8,1;addressid/138323416;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/72.12;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/ca1a32afca36bc9fb37fd03f18e653bce53eaca5|109;jdv/0|kong|t_1000536212_|jingfen|c82bfa19e33a4269a5884ffc614790f4|1614141246;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;7346933333666353-8333366646039373;network/wifi;model/ONEPLUS A5010;addressid/138117973;aid/7d933f6583cfd097;oaid/;osVer/29;appBuild/1436;psn/T/eqfRSwp8VKEvvXyEunq09Cg2MUkiQ5|17;psq/4;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/11.4;jdv/0|kong|t_1001849073_|jingfen|495a47f6c0b8431c9d460f61ad2304dc|1614084403978|1614084407;ref/HomeFragment;partner/oppo;apprpd/Home_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; ONEPLUS A5010 Build/QKQ1.191014.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "android;3.7.0;11;4626269356736353-5353236346334673;network/wifi;model/M2006J10C;addressid/0;aid/dbb9e7655526d3d7;oaid/66a7af49362987b0;osVer/30;appBuild/1436;psn/rQRQgJ 4 S3qkq8YDl28y6jkUHmI/rlX|3;psq/4;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 11;osv/11;pv/3.4;jdv/;ref/HomeFragment;partner/xiaomi;apprpd/Home_Main;eufv/1;Mozilla/5.0 (Linux; Android 11; M2006J10C Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045513 Mobile Safari/537.36", "iPhone;3.7.0;14.4;78fc1d919de0c8c2de15725eff508d8ab14f9c82;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,1;addressid/137829713;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/23.11;apprpd/;ref/JDLTSubMainPageViewController;psq/10;ads/;psn/78fc1d919de0c8c2de15725eff508d8ab14f9c82|34;jdv/0|iosapp|t_335139774|appshare|Wxfriends|1612508702380|1612534293;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;0373263343266633-5663030363465326;network/wifi;model/Redmi Note 7;addressid/590846082;aid/07b34bf3e6006d5b;oaid/17975a142e67ec92;osVer/29;appBuild/1436;psn/OHNqtdhQKv1okyh7rB3HxjwI00ixJMNG|4;psq/3;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/2.3;jdv/;ref/activityId=8a8fabf3cccb417f8e691b6774938bc2;partner/xiaomi;apprpd/jsbqd_home;eufv/1;Mozilla/5.0 (Linux; Android 10; Redmi Note 7 Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.152 Mobile Safari/537.36", "android;3.7.0;10;3636566623663623-1693635613166646;network/wifi;model/ASUS_I001DA;addressid/1397761133;aid/ccef2fc2a96e1afd;oaid/;osVer/29;appBuild/1436;psn/T8087T0D82PHzJ4VUMGFrfB9dw4gUnKG|76;psq/5;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/73.5;jdv/0|kong|t_1002354188_|jingfen|2335e043b3344107a2750a781fde9a2e#/|1614097081426|1614097087;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/yingyongbao;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; ASUS_I001DA Build/QKQ1.190825.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,2;addressid/138419019;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/5.7;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/6;ads/;psn/4ee6af0db48fd605adb69b63f00fcbb51c2fc3f0|9;jdv/0|direct|-|none|-|1613705981655|1613823229;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/wifi;ADID/F9FD7728-2956-4DD1-8EDD-58B07950864C;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,1;addressid/1346909722;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/30.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/40d4d4323eb3987226cae367d6b0d8be50f2c7b3|39;jdv/0|kong|t_1000252057_0|tuiguang|eba7648a0f4445aa9cfa6f35c6f36e15|1613995717959|1613995723;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;ADID/5D306F0D-A131-4B26-947E-166CCB9BFFFF;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,6;addressid/138164461;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/7.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/d40e5d4a33c100e8527f779557c347569b49c304|7;jdv/0|kong|t_1001226363_|jingfen|3bf5372cb9cd445bbb270b8bc9a34f00|1608439066693|1608439068;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPad;3.7.0;14.5;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPad8,9;hasOCPay/0;appBuild/1017;supportBestPay/0;addressid/;pv/1.20;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/5;ads/;psn/d9f5ddaa0160a20f32fb2c8bfd174fae7993c1b4|3;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.5;Mozilla/5.0 (iPad; CPU OS 14_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/wifi;ADID/31548A9C-8A01-469A-B148-E7D841C91FD0;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/10.5;apprpd/;ref/JDLTSubMainPageViewController;psq/4;ads/;psn/a858fb4b40e432ea32f80729916e6c3e910bb922|12;jdv/0|direct|-|none|-|1613898710373|1613898712;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,2;addressid/2237496805;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/13.6;apprpd/;ref/JDLTSubMainPageViewController;psq/5;ads/;psn/48e495dcf5dc398b4d46b27e9f15a2b427a154aa|15;jdv/0|direct|-|none|-|1613354874698|1613952828;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;3346332626262353-1666434336539336;network/wifi;model/ONEPLUS A6000;addressid/0;aid/3d3bbb25af44c59c;oaid/;osVer/29;appBuild/1436;psn/ECbc2EqmdSa7mDF1PS1GSrV/Tn7R1LS1|6;psq/8;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/2.67;jdv/0|direct|-|none|-|1613822479379|1613991194;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/oppo;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; ONEPLUS A6000 Build/QKQ1.190716.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "android;3.7.0;8.1.0;8363834353530333132333132373-43D2930366035323639333662383;network/wifi;model/16th Plus;addressid/0;aid/f909e5f2c464c7c6;oaid/;osVer/27;appBuild/1436;psn/c21YWvVr77Hn6 pOZfxXGY4TZrre1 UOL5hcPbCEDMo=|3;psq/10;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 8.1.0;osv/8.1.0;pv/2.15;jdv/;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/jsxdlyqj09;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 8.1.0; 16th Plus Build/OPM1.171019.026; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045514 Mobile Safari/537.36", "android;3.7.0;11;1343467336264693-3343562673463613;network/wifi;model/Mi 10 Pro;addressid/0;aid/14d7cbd934eb7dc1;oaid/335f198546eb3141;osVer/30;appBuild/1436;psn/ZcQh/Wov sNYfZ6JUjTIUBu28 KT0T3u|1;psq/24;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 11;osv/11;pv/1.24;jdv/;ref/com.jd.jdlite.lib.jdlitemessage.view.activity.MessageCenterMainActivity;partner/xiaomi;apprpd/MessageCenter_MessageMerge;eufv/1;Mozilla/5.0 (Linux; Android 11; Mi 10 Pro Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.181 Mobile Safari/537.36", "android;3.7.0;10;8353636393732346-6646931673935346;network/wifi;model/MI 8;addressid/1969998059;aid/8566972dfd9a795d;oaid/4a8b773c3e307386;osVer/29;appBuild/1436;psn/PhYbUtCsCJo r 1b8hwxjnY8rEv5S8XC|383;psq/14;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/374.14;jdv/0|iosapp|t_335139774|liteshare|CopyURL|1609306590175|1609306596;ref/com.jd.jdlite.lib.jdlitemessage.view.activity.MessageCenterMainActivity;partner/jsxdlyqj09;apprpd/MessageCenter_MessageMerge;eufv/1;Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "iPhone;3.7.0;14.4;6d343c58764a908d4fa56609da4cb3a5cc1396d3;network/wifi;ADID/4965D884-3E61-4C4E-AEA7-9A8CE3742DA7;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,1;addressid/70390480;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.24;apprpd/MyJD_Main;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fafter%2Findex.action%3FcategoryId%3D600%26v%3D6%26entry%3Dm_self_jd;psq/4;ads/;psn/6d343c58764a908d4fa56609da4cb3a5cc1396d3|17;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.6.1;4606ddccdfe8f343f8137de7fea7f91fc4aef3a3;network/4g;ADID/C6FB6E20-D334-45FA-818A-7A4C58305202;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone10,1;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/5.9;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/8;ads/;psn/4606ddccdfe8f343f8137de7fea7f91fc4aef3a3|5;jdv/0|iosapp|t_335139774|liteshare|Qqfriends|1614206359106|1614206366;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.6.1;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;3b6e79334551fc6f31952d338b996789d157c4e8;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,1;addressid/138051400;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/14.34;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/12;ads/;psn/3b6e79334551fc6f31952d338b996789d157c4e8|46;jdv/0|kong|t_1001707023_|jingfen|e80d7173a4264f4c9a3addcac7da8b5d|1613837384708|1613858760;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;1346235693831363-2373837393932673;network/wifi;model/LYA-AL00;addressid/3321567203;aid/1d2e9816278799b7;oaid/00000000-0000-0000-0000-000000000000;osVer/29;appBuild/1436;psn/45VUZFTZJkhP5fAXbeBoQ0   O2GCB I|7;psq/5;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/5.8;jdv/0|iosapp|t_335139774|liteshare|CopyURL|1614066210320|1614066219;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/huawei;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; LYA-AL00 Build/HUAWEILYA-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36", "iPhone;3.7.0;14.3;c2a8854e622a1b17a6c56c789f832f9d78ef1ba7;network/wifi;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone12,5;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/3.9;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/8;ads/;psn/c2a8854e622a1b17a6c56c789f832f9d78ef1ba7|6;jdv/0|direct|-|none|-|1613541016735|1613823566;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;9;;network/wifi;model/MIX 2S;addressid/;aid/f87efed6d9ed3c65;oaid/94739128ef9dd245;osVer/28;appBuild/1436;psn/R7wD/OWkQjYWxax1pDV6kTIDFPJCUid7C/nl2hHnUuI=|3;psq/13;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 9;osv/9;pv/1.42;jdv/;ref/activityId=8a8fabf3cccb417f8e691b6774938bc2;partner/xiaomi;apprpd/jsbqd_home;eufv/1;Mozilla/5.0 (Linux; Android 9; MIX 2S Build/PKQ1.180729.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.181 Mobile Safari/537.36", "iPhone;3.7.0;14.4;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;network/wifi;Mozilla/5.0 (Linux; Android 10; Redmi Note 7 Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.152 Mobile Safari/537.36", "iPhone;3.7.0;14.4;network/3g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPad;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPad6,3;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/231.11;pap/JA2020_3112531|3.7.0|IOS 14.4;apprpd/;psn/f5e7b7980fb50efc9c294ac38653c1584846c3db|305;usc/kong;jdv/0|kong|t_1000170135|tuiguang|notset|1613606450668|1613606450;umd/tuiguang;psq/2;ucp/t_1000170135;app_device/IOS;utr/notset;ref/JDLTRedPacketViewController;adk/;ads/;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone8,1;addressid/669949466;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/9.11;apprpd/;ref/JDLTSubMainPageViewController;psq/10;ads/;psn/500a795cb2abae60b877ee4a1930557a800bef1c|11;jdv/;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/3g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,4;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.47;apprpd/;ref/JDLTSubMainPageViewController;psq/8;ads/;psn/21631ed983b3e854a3154b0336413825ad0d6783|9;jdv/0|direct|-|none|-|1614150725100|1614225882;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/3g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,4;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.47;apprpd/;ref/JDLTSubMainPageViewController;psq/8;ads/;psn/21631ed983b3e854a3154b0336413825ad0d6783|9;jdv/0|direct|-|none|-|1614150725100|1614225882;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/3.15;apprpd/;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fchat%2Findex.action%3Fentry%3Djd_m_JiSuCommodity%26pid%3D7763388%26lng%3D118.159665%26lat%3D24.504633%26sid%3D31cddc2d58f6e36bf2c31c4e8a79767w%26un_area%3D16_1315_3486_0;psq/12;ads/;psn/c10e0db6f15dec57a94637365f4c3d43e05bbd48|4;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/3.15;apprpd/;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fchat%2Findex.action%3Fentry%3Djd_m_JiSuCommodity%26pid%3D7763388%26lng%3D118.159665%26lat%3D24.504633%26sid%3D31cddc2d58f6e36bf2c31c4e8a79767w%26un_area%3D16_1315_3486_0;psq/12;ads/;psn/c10e0db6f15dec57a94637365f4c3d43e05bbd48|4;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/3.15;apprpd/;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fchat%2Findex.action%3Fentry%3Djd_m_JiSuCommodity%26pid%3D7763388%26lng%3D118.159665%26lat%3D24.504633%26sid%3D31cddc2d58f6e36bf2c31c4e8a79767w%26un_area%3D16_1315_3486_0;psq/12;ads/;psn/c10e0db6f15dec57a94637365f4c3d43e05bbd48|4;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,6;hasOCPay/0;appBuild/1017;supportBestPay/0;addressid/2813715704;pv/67.38;apprpd/MyJD_Main;ref/https%3A%2F%2Fh5.m.jd.com%2FbabelDiy%2FZeus%2F2ynE8QDtc2svd36VowmYWBzzDdK6%2Findex.html%3Flng%3D103.957532%26lat%3D30.626962%26sid%3D4fe8ef4283b24723a7bb30ee87c18b2w%26un_area%3D22_1930_49324_52512;psq/4;ads/;psn/5aef178f95931bdbbde849ea9e2fc62b18bc5829|127;jdv/0|direct|-|none|-|1612588090667|1613822580;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone12,1;addressid/3104834020;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.6;apprpd/;ref/JDLTSubMainPageViewController;psq/5;ads/;psn/c633e62b5a4ad0fdd93d9862bdcacfa8f3ecef63|6;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,1;addressid/1346909722;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/30.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/40d4d4323eb3987226cae367d6b0d8be50f2c7b3|39;jdv/0|kong|t_1000252057_0|tuiguang|eba7648a0f4445aa9cfa6f35c6f36e15|1613995717959|1613995723;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/wifi;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,1;addressid/1346909722;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/30.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/40d4d4323eb3987226cae367d6b0d8be50f2c7b3|39;jdv/0|kong|t_1000252057_0|tuiguang|eba7648a0f4445aa9cfa6f35c6f36e15|1613995717959|1613995723;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,6;addressid/138164461;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/7.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/d40e5d4a33c100e8527f779557c347569b49c304|7;jdv/0|kong|t_1001226363_|jingfen|3bf5372cb9cd445bbb270b8bc9a34f00|1608439066693|1608439068;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,6;addressid/138164461;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/7.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/d40e5d4a33c100e8527f779557c347569b49c304|7;jdv/0|kong|t_1001226363_|jingfen|3bf5372cb9cd445bbb270b8bc9a34f00|1608439066693|1608439068;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,6;addressid/138164461;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/7.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/d40e5d4a33c100e8527f779557c347569b49c304|7;jdv/0|kong|t_1001226363_|jingfen|3bf5372cb9cd445bbb270b8bc9a34f00|1608439066693|1608439068;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,2;addressid/2237496805;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/13.6;apprpd/;ref/JDLTSubMainPageViewController;psq/5;ads/;psn/48e495dcf5dc398b4d46b27e9f15a2b427a154aa|15;jdv/0|direct|-|none|-|1613354874698|1613952828;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;network/wifi;model/ONEPLUS A6000;addressid/0;aid/3d3bbb25af44c59c;oaid/;osVer/29;appBuild/1436;psn/ECbc2EqmdSa7mDF1PS1GSrV/Tn7R1LS1|6;psq/8;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/2.67;jdv/0|direct|-|none|-|1613822479379|1613991194;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/oppo;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; ONEPLUS A6000 Build/QKQ1.190716.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "android;3.7.0;8.1.0;network/wifi;model/16th Plus;addressid/0;aid/f909e5f2c464c7c6;oaid/;osVer/27;appBuild/1436;psn/c21YWvVr77Hn6 pOZfxXGY4TZrre1 UOL5hcPbCEDMo=|3;psq/10;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 8.1.0;osv/8.1.0;pv/2.15;jdv/;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/jsxdlyqj09;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 8.1.0; 16th Plus Build/OPM1.171019.026; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045514 Mobile Safari/537.36", "android;3.7.0;11;network/wifi;model/Mi 10 Pro;addressid/0;aid/14d7cbd934eb7dc1;oaid/335f198546eb3141;osVer/30;appBuild/1436;psn/ZcQh/Wov sNYfZ6JUjTIUBu28 KT0T3u|1;psq/24;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 11;osv/11;pv/1.24;jdv/;ref/com.jd.jdlite.lib.jdlitemessage.view.activity.MessageCenterMainActivity;partner/xiaomi;apprpd/MessageCenter_MessageMerge;eufv/1;Mozilla/5.0 (Linux; Android 11; Mi 10 Pro Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.181 Mobile Safari/537.36", "android;3.7.0;10;network/wifi;model/MI 8;addressid/1969998059;aid/8566972dfd9a795d;oaid/4a8b773c3e307386;osVer/29;appBuild/1436;psn/PhYbUtCsCJo r 1b8hwxjnY8rEv5S8XC|383;psq/14;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/374.14;jdv/0|iosapp|t_335139774|liteshare|CopyURL|1609306590175|1609306596;ref/com.jd.jdlite.lib.jdlitemessage.view.activity.MessageCenterMainActivity;partner/jsxdlyqj09;apprpd/MessageCenter_MessageMerge;eufv/1;Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone8,4;addressid/1477231693;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/21.15;apprpd/MyJD_Main;ref/https%3A%2F%2Fgold.jd.com%2F%3Flng%3D0.000000%26lat%3D0.000000%26sid%3D4584eb84dc00141b0d58e000583a338w%26un_area%3D19_1607_3155_62114;psq/0;ads/;psn/2c822e59db319590266cc83b78c4a943783d0077|46;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,1;addressid/70390480;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.24;apprpd/MyJD_Main;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fafter%2Findex.action%3FcategoryId%3D600%26v%3D6%26entry%3Dm_self_jd;psq/4;ads/;psn/6d343c58764a908d4fa56609da4cb3a5cc1396d3|17;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,1;addressid/70390480;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.24;apprpd/MyJD_Main;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fafter%2Findex.action%3FcategoryId%3D600%26v%3D6%26entry%3Dm_self_jd;psq/4;ads/;psn/6d343c58764a908d4fa56609da4cb3a5cc1396d3|17;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,1;addressid/70390480;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.24;apprpd/MyJD_Main;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fafter%2Findex.action%3FcategoryId%3D600%26v%3D6%26entry%3Dm_self_jd;psq/4;ads/;psn/6d343c58764a908d4fa56609da4cb3a5cc1396d3|17;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,1;addressid/70390480;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.24;apprpd/MyJD_Main;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fafter%2Findex.action%3FcategoryId%3D600%26v%3D6%26entry%3Dm_self_jd;psq/4;ads/;psn/6d343c58764a908d4fa56609da4cb3a5cc1396d3|17;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone12,3;hasOCPay/0;appBuild/1017;supportBestPay/0;addressid/;pv/3.49;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/7;ads/;psn/9e0e0ea9c6801dfd53f2e50ffaa7f84c7b40cd15|6;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPad;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPad7,5;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.14;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/3;ads/;psn/956c074c769cd2eeab2e36fca24ad4c9e469751a|8;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148"];
function randomNumber(_0x279bcb = 0, _0x43092d = 100) {
  return Math.min(Math.floor(_0x279bcb + Math.random() * (_0x43092d - _0x279bcb)), _0x43092d);
}
const User_Agent = USER_AGENTS[randomNumber(0, USER_AGENTS.length - 1)];
let CookieEles = ["ut_ubt_ssid=gk8heo0owfmcu694i9cja1t7le8e9rkw_2022-09-21; cna=NpexGyqJS08CAdpsBroExWkU; _samesite_flag_=true; t=15b663851a92d07d56307331c17bb1ac; _tb_token_=f6b7b54eb0be0; track_id=1663815309|c7258dd154a1939c6310e2a94249de5c1d753af60e206397c2|99c38cd1f9575235c0cc1554a19553c7; ubt_ssid=3tz613ihmmm3swf6llfh7ur37uapgby0_2022-09-22; tzyy=cac87b0c56c8b4758bc453a458fbfb06; xlly_s=1; _m_h5_tk=deaa0d5b6f847b9c16f392d14091d733_1663926629708; _m_h5_tk_enc=a8eb96c22ae059c85a2880c7723ac33f; cookie2=19e182f052eec6bb6edc60f0b292d167; sgcookie=E100zNi5jzEQRVMueiQ2UoiaqUrX6sCQCVMUmKJTnmhmplhYt3hmpHHmNRGfqzmBZ3qbTnt2DZUG1BH3vFI4AUiNCH80CneTRpUe%2FEplwLs9cVM%3D; munb=2204713241574; csg=33daeea3; t_eleuc4=id4=0%40BA%2FvuHCrrRkdapLlJsFt8TCQdB%2BEx5YQFdeqEA%3D%3D; unb=2204713241574; USERID=248913579; SID=QQAAAAAO1h6rDgAGFAAwNTJlZWM2YmI2ZRr-EqzPeIC2ZW6G6icifHVQ; UTUSER=248913579; tfstk=czDfBNNZPq1630JGnrtyujSWpWwCZzTLqCUncU8XCMUkiymfieWURWyiu6FYEu1..; l=eBT2Hy8RTrXbDfRNXOfZnurza7PFSCOxnuPzaNbMiOCPOufe5TVCW6o", ""];
let t;
if (process.env.ELE_COOKIE) {
  if (process.env.ELE_COOKIE.indexOf("&") > -1) {
    CookieEles = process.env.ELE_COOKIE.split("&");
  } else {
    if (process.env.ELE_COOKIE.indexOf("\n") > -1) {
      CookieEles = process.env.ELE_COOKIE.split("\n");
    } else {
      CookieEles = [process.env.ELE_COOKIE];
    }
  }
}
function getToken(_0x212fb8) {
  for (var _0x28c85c = _0x212fb8.split(";"), _0x1bd4ee = 0; _0x1bd4ee < _0x28c85c.length; _0x1bd4ee++) {
    var _0x297acf = _0x28c85c[_0x1bd4ee].split("=");
    if ([" _m_h5_tk", "_m_h5_tk"].includes(_0x297acf[0])) {
      return _0x297acf[1];
    }
  }
  return "-1";
}
function sign(_0x283548) {
  function _0x568d76(_0x955af7, _0x1fbc46) {
    return _0x955af7 << _0x1fbc46 | _0x955af7 >>> 32 - _0x1fbc46;
  }
  function _0x3c3116(_0x3fd7e7, _0x111201) {
    var _0x5196b8, _0x20f5a8, _0x25b7df, _0x58933d, _0x37a62b;
    _0x25b7df = 2147483648 & _0x3fd7e7;
    _0x58933d = 2147483648 & _0x111201;
    _0x37a62b = (1073741823 & _0x3fd7e7) + (1073741823 & _0x111201);
    return (_0x5196b8 = 1073741824 & _0x3fd7e7) & (_0x20f5a8 = 1073741824 & _0x111201) ? 2147483648 ^ _0x37a62b ^ _0x25b7df ^ _0x58933d : _0x5196b8 | _0x20f5a8 ? 1073741824 & _0x37a62b ? 3221225472 ^ _0x37a62b ^ _0x25b7df ^ _0x58933d : 1073741824 ^ _0x37a62b ^ _0x25b7df ^ _0x58933d : _0x37a62b ^ _0x25b7df ^ _0x58933d;
  }
  function _0x4d60c1(_0x5300d9, _0x1febd8, _0x1bfeb4, _0x367459, _0x39445a, _0x51ba17, _0x31b0ba) {
    _0x5300d9 = _0x3c3116(_0x5300d9, _0x3c3116(_0x3c3116(function (_0x1efa9b, _0x575315, _0x2502df) {
      return _0x1efa9b & _0x575315 | ~_0x1efa9b & _0x2502df;
    }(_0x1febd8, _0x1bfeb4, _0x367459), _0x39445a), _0x31b0ba));
    return _0x3c3116(_0x568d76(_0x5300d9, _0x51ba17), _0x1febd8);
  }
  function _0x249fe8(_0x12afc2, _0x10f996, _0x199bb9, _0x160acc, _0x283046, _0x1660da, _0xcf40ac) {
    _0x12afc2 = _0x3c3116(_0x12afc2, _0x3c3116(_0x3c3116(function (_0x3df9cf, _0x1477c7, _0x10ca3e) {
      return _0x3df9cf & _0x10ca3e | _0x1477c7 & ~_0x10ca3e;
    }(_0x10f996, _0x199bb9, _0x160acc), _0x283046), _0xcf40ac));
    return _0x3c3116(_0x568d76(_0x12afc2, _0x1660da), _0x10f996);
  }
  function _0x13e9a0(_0x764988, _0x1805a8, _0x33ce69, _0x55fc1d, _0x491095, _0x2eb58b, _0x46cac7) {
    _0x764988 = _0x3c3116(_0x764988, _0x3c3116(_0x3c3116(function (_0x2b6c33, _0x52e417, _0x20227a) {
      return _0x2b6c33 ^ _0x52e417 ^ _0x20227a;
    }(_0x1805a8, _0x33ce69, _0x55fc1d), _0x491095), _0x46cac7));
    return _0x3c3116(_0x568d76(_0x764988, _0x2eb58b), _0x1805a8);
  }
  function _0x1c7b17(_0x5630b5, _0x20b158, _0x24d34c, _0x34b3f3, _0xcf462f, _0x4e3b04, _0x452f93) {
    _0x5630b5 = _0x3c3116(_0x5630b5, _0x3c3116(_0x3c3116(function (_0x400a4c, _0xe0ade8, _0x505bab) {
      return _0xe0ade8 ^ (_0x400a4c | ~_0x505bab);
    }(_0x20b158, _0x24d34c, _0x34b3f3), _0xcf462f), _0x452f93));
    return _0x3c3116(_0x568d76(_0x5630b5, _0x4e3b04), _0x20b158);
  }
  function _0x1530d7(_0x4e4086) {
    var _0x287d48,
      _0x285764 = "",
      _0x1e3817 = "";
    for (_0x287d48 = 0; 3 >= _0x287d48; _0x287d48++) {
      _0x285764 += (_0x1e3817 = "0" + (_0x4e4086 >>> 8 * _0x287d48 & 255).toString(16)).substr(_0x1e3817.length - 2, 2);
    }
    return _0x285764;
  }
  var _0x302743, _0x9a8a78, _0x52018c, _0x4658c1, _0x52a364, _0x500be3, _0x4714cb, _0x136b31, _0x21d391, _0x8e23c8;
  for (_0x8e23c8 = function (_0x281239) {
    for (var _0x4cef19, _0x376869 = _0x281239.length, _0x2fe524 = _0x376869 + 8, _0x445244 = 16 * ((_0x2fe524 - _0x2fe524 % 64) / 64 + 1), _0xc90f16 = new Array(_0x445244 - 1), _0x2f3077 = 0, _0x27dd93 = 0; _0x376869 > _0x27dd93;) {
      _0x2f3077 = _0x27dd93 % 4 * 8;
      _0xc90f16[_0x4cef19 = (_0x27dd93 - _0x27dd93 % 4) / 4] = _0xc90f16[_0x4cef19] | _0x281239.charCodeAt(_0x27dd93) << _0x2f3077;
      _0x27dd93++;
    }
    _0x2f3077 = _0x27dd93 % 4 * 8;
    _0xc90f16[_0x4cef19 = (_0x27dd93 - _0x27dd93 % 4) / 4] = _0xc90f16[_0x4cef19] | 128 << _0x2f3077;
    _0xc90f16[_0x445244 - 2] = _0x376869 << 3;
    _0xc90f16[_0x445244 - 1] = _0x376869 >>> 29;
    return _0xc90f16;
  }(_0x283548 = function (_0x5d7ab2) {
    _0x5d7ab2 = _0x5d7ab2.replace(/\r\n/g, "\n");
    for (var _0x2cfd62 = "", _0x13ced9 = 0; _0x13ced9 < _0x5d7ab2.length; _0x13ced9++) {
      var _0x261436 = _0x5d7ab2.charCodeAt(_0x13ced9);
      128 > _0x261436 ? _0x2cfd62 += String.fromCharCode(_0x261436) : _0x261436 > 127 && 2048 > _0x261436 ? (_0x2cfd62 += String.fromCharCode(_0x261436 >> 6 | 192), _0x2cfd62 += String.fromCharCode(63 & _0x261436 | 128)) : (_0x2cfd62 += String.fromCharCode(_0x261436 >> 12 | 224), _0x2cfd62 += String.fromCharCode(_0x261436 >> 6 & 63 | 128), _0x2cfd62 += String.fromCharCode(63 & _0x261436 | 128));
    }
    return _0x2cfd62;
  }(_0x283548)), _0x500be3 = 1732584193, _0x4714cb = 4023233417, _0x136b31 = 2562383102, _0x21d391 = 271733878, _0x302743 = 0; _0x302743 < _0x8e23c8.length; _0x302743 += 16) {
    _0x9a8a78 = _0x500be3;
    _0x52018c = _0x4714cb;
    _0x4658c1 = _0x136b31;
    _0x52a364 = _0x21d391;
    _0x500be3 = _0x4d60c1(_0x500be3, _0x4714cb, _0x136b31, _0x21d391, _0x8e23c8[_0x302743 + 0], 7, 3614090360);
    _0x21d391 = _0x4d60c1(_0x21d391, _0x500be3, _0x4714cb, _0x136b31, _0x8e23c8[_0x302743 + 1], 12, 3905402710);
    _0x136b31 = _0x4d60c1(_0x136b31, _0x21d391, _0x500be3, _0x4714cb, _0x8e23c8[_0x302743 + 2], 17, 606105819);
    _0x4714cb = _0x4d60c1(_0x4714cb, _0x136b31, _0x21d391, _0x500be3, _0x8e23c8[_0x302743 + 3], 22, 3250441966);
    _0x500be3 = _0x4d60c1(_0x500be3, _0x4714cb, _0x136b31, _0x21d391, _0x8e23c8[_0x302743 + 4], 7, 4118548399);
    _0x21d391 = _0x4d60c1(_0x21d391, _0x500be3, _0x4714cb, _0x136b31, _0x8e23c8[_0x302743 + 5], 12, 1200080426);
    _0x136b31 = _0x4d60c1(_0x136b31, _0x21d391, _0x500be3, _0x4714cb, _0x8e23c8[_0x302743 + 6], 17, 2821735955);
    _0x4714cb = _0x4d60c1(_0x4714cb, _0x136b31, _0x21d391, _0x500be3, _0x8e23c8[_0x302743 + 7], 22, 4249261313);
    _0x500be3 = _0x4d60c1(_0x500be3, _0x4714cb, _0x136b31, _0x21d391, _0x8e23c8[_0x302743 + 8], 7, 1770035416);
    _0x21d391 = _0x4d60c1(_0x21d391, _0x500be3, _0x4714cb, _0x136b31, _0x8e23c8[_0x302743 + 9], 12, 2336552879);
    _0x136b31 = _0x4d60c1(_0x136b31, _0x21d391, _0x500be3, _0x4714cb, _0x8e23c8[_0x302743 + 10], 17, 4294925233);
    _0x4714cb = _0x4d60c1(_0x4714cb, _0x136b31, _0x21d391, _0x500be3, _0x8e23c8[_0x302743 + 11], 22, 2304563134);
    _0x500be3 = _0x4d60c1(_0x500be3, _0x4714cb, _0x136b31, _0x21d391, _0x8e23c8[_0x302743 + 12], 7, 1804603682);
    _0x21d391 = _0x4d60c1(_0x21d391, _0x500be3, _0x4714cb, _0x136b31, _0x8e23c8[_0x302743 + 13], 12, 4254626195);
    _0x136b31 = _0x4d60c1(_0x136b31, _0x21d391, _0x500be3, _0x4714cb, _0x8e23c8[_0x302743 + 14], 17, 2792965006);
    _0x500be3 = _0x249fe8(_0x500be3, _0x4714cb = _0x4d60c1(_0x4714cb, _0x136b31, _0x21d391, _0x500be3, _0x8e23c8[_0x302743 + 15], 22, 1236535329), _0x136b31, _0x21d391, _0x8e23c8[_0x302743 + 1], 5, 4129170786);
    _0x21d391 = _0x249fe8(_0x21d391, _0x500be3, _0x4714cb, _0x136b31, _0x8e23c8[_0x302743 + 6], 9, 3225465664);
    _0x136b31 = _0x249fe8(_0x136b31, _0x21d391, _0x500be3, _0x4714cb, _0x8e23c8[_0x302743 + 11], 14, 643717713);
    _0x4714cb = _0x249fe8(_0x4714cb, _0x136b31, _0x21d391, _0x500be3, _0x8e23c8[_0x302743 + 0], 20, 3921069994);
    _0x500be3 = _0x249fe8(_0x500be3, _0x4714cb, _0x136b31, _0x21d391, _0x8e23c8[_0x302743 + 5], 5, 3593408605);
    _0x21d391 = _0x249fe8(_0x21d391, _0x500be3, _0x4714cb, _0x136b31, _0x8e23c8[_0x302743 + 10], 9, 38016083);
    _0x136b31 = _0x249fe8(_0x136b31, _0x21d391, _0x500be3, _0x4714cb, _0x8e23c8[_0x302743 + 15], 14, 3634488961);
    _0x4714cb = _0x249fe8(_0x4714cb, _0x136b31, _0x21d391, _0x500be3, _0x8e23c8[_0x302743 + 4], 20, 3889429448);
    _0x500be3 = _0x249fe8(_0x500be3, _0x4714cb, _0x136b31, _0x21d391, _0x8e23c8[_0x302743 + 9], 5, 568446438);
    _0x21d391 = _0x249fe8(_0x21d391, _0x500be3, _0x4714cb, _0x136b31, _0x8e23c8[_0x302743 + 14], 9, 3275163606);
    _0x136b31 = _0x249fe8(_0x136b31, _0x21d391, _0x500be3, _0x4714cb, _0x8e23c8[_0x302743 + 3], 14, 4107603335);
    _0x4714cb = _0x249fe8(_0x4714cb, _0x136b31, _0x21d391, _0x500be3, _0x8e23c8[_0x302743 + 8], 20, 1163531501);
    _0x500be3 = _0x249fe8(_0x500be3, _0x4714cb, _0x136b31, _0x21d391, _0x8e23c8[_0x302743 + 13], 5, 2850285829);
    _0x21d391 = _0x249fe8(_0x21d391, _0x500be3, _0x4714cb, _0x136b31, _0x8e23c8[_0x302743 + 2], 9, 4243563512);
    _0x136b31 = _0x249fe8(_0x136b31, _0x21d391, _0x500be3, _0x4714cb, _0x8e23c8[_0x302743 + 7], 14, 1735328473);
    _0x500be3 = _0x13e9a0(_0x500be3, _0x4714cb = _0x249fe8(_0x4714cb, _0x136b31, _0x21d391, _0x500be3, _0x8e23c8[_0x302743 + 12], 20, 2368359562), _0x136b31, _0x21d391, _0x8e23c8[_0x302743 + 5], 4, 4294588738);
    _0x21d391 = _0x13e9a0(_0x21d391, _0x500be3, _0x4714cb, _0x136b31, _0x8e23c8[_0x302743 + 8], 11, 2272392833);
    _0x136b31 = _0x13e9a0(_0x136b31, _0x21d391, _0x500be3, _0x4714cb, _0x8e23c8[_0x302743 + 11], 16, 1839030562);
    _0x4714cb = _0x13e9a0(_0x4714cb, _0x136b31, _0x21d391, _0x500be3, _0x8e23c8[_0x302743 + 14], 23, 4259657740);
    _0x500be3 = _0x13e9a0(_0x500be3, _0x4714cb, _0x136b31, _0x21d391, _0x8e23c8[_0x302743 + 1], 4, 2763975236);
    _0x21d391 = _0x13e9a0(_0x21d391, _0x500be3, _0x4714cb, _0x136b31, _0x8e23c8[_0x302743 + 4], 11, 1272893353);
    _0x136b31 = _0x13e9a0(_0x136b31, _0x21d391, _0x500be3, _0x4714cb, _0x8e23c8[_0x302743 + 7], 16, 4139469664);
    _0x4714cb = _0x13e9a0(_0x4714cb, _0x136b31, _0x21d391, _0x500be3, _0x8e23c8[_0x302743 + 10], 23, 3200236656);
    _0x500be3 = _0x13e9a0(_0x500be3, _0x4714cb, _0x136b31, _0x21d391, _0x8e23c8[_0x302743 + 13], 4, 681279174);
    _0x21d391 = _0x13e9a0(_0x21d391, _0x500be3, _0x4714cb, _0x136b31, _0x8e23c8[_0x302743 + 0], 11, 3936430074);
    _0x136b31 = _0x13e9a0(_0x136b31, _0x21d391, _0x500be3, _0x4714cb, _0x8e23c8[_0x302743 + 3], 16, 3572445317);
    _0x4714cb = _0x13e9a0(_0x4714cb, _0x136b31, _0x21d391, _0x500be3, _0x8e23c8[_0x302743 + 6], 23, 76029189);
    _0x500be3 = _0x13e9a0(_0x500be3, _0x4714cb, _0x136b31, _0x21d391, _0x8e23c8[_0x302743 + 9], 4, 3654602809);
    _0x21d391 = _0x13e9a0(_0x21d391, _0x500be3, _0x4714cb, _0x136b31, _0x8e23c8[_0x302743 + 12], 11, 3873151461);
    _0x136b31 = _0x13e9a0(_0x136b31, _0x21d391, _0x500be3, _0x4714cb, _0x8e23c8[_0x302743 + 15], 16, 530742520);
    _0x500be3 = _0x1c7b17(_0x500be3, _0x4714cb = _0x13e9a0(_0x4714cb, _0x136b31, _0x21d391, _0x500be3, _0x8e23c8[_0x302743 + 2], 23, 3299628645), _0x136b31, _0x21d391, _0x8e23c8[_0x302743 + 0], 6, 4096336452);
    _0x21d391 = _0x1c7b17(_0x21d391, _0x500be3, _0x4714cb, _0x136b31, _0x8e23c8[_0x302743 + 7], 10, 1126891415);
    _0x136b31 = _0x1c7b17(_0x136b31, _0x21d391, _0x500be3, _0x4714cb, _0x8e23c8[_0x302743 + 14], 15, 2878612391);
    _0x4714cb = _0x1c7b17(_0x4714cb, _0x136b31, _0x21d391, _0x500be3, _0x8e23c8[_0x302743 + 5], 21, 4237533241);
    _0x500be3 = _0x1c7b17(_0x500be3, _0x4714cb, _0x136b31, _0x21d391, _0x8e23c8[_0x302743 + 12], 6, 1700485571);
    _0x21d391 = _0x1c7b17(_0x21d391, _0x500be3, _0x4714cb, _0x136b31, _0x8e23c8[_0x302743 + 3], 10, 2399980690);
    _0x136b31 = _0x1c7b17(_0x136b31, _0x21d391, _0x500be3, _0x4714cb, _0x8e23c8[_0x302743 + 10], 15, 4293915773);
    _0x4714cb = _0x1c7b17(_0x4714cb, _0x136b31, _0x21d391, _0x500be3, _0x8e23c8[_0x302743 + 1], 21, 2240044497);
    _0x500be3 = _0x1c7b17(_0x500be3, _0x4714cb, _0x136b31, _0x21d391, _0x8e23c8[_0x302743 + 8], 6, 1873313359);
    _0x21d391 = _0x1c7b17(_0x21d391, _0x500be3, _0x4714cb, _0x136b31, _0x8e23c8[_0x302743 + 15], 10, 4264355552);
    _0x136b31 = _0x1c7b17(_0x136b31, _0x21d391, _0x500be3, _0x4714cb, _0x8e23c8[_0x302743 + 6], 15, 2734768916);
    _0x4714cb = _0x1c7b17(_0x4714cb, _0x136b31, _0x21d391, _0x500be3, _0x8e23c8[_0x302743 + 13], 21, 1309151649);
    _0x500be3 = _0x1c7b17(_0x500be3, _0x4714cb, _0x136b31, _0x21d391, _0x8e23c8[_0x302743 + 4], 6, 4149444226);
    _0x21d391 = _0x1c7b17(_0x21d391, _0x500be3, _0x4714cb, _0x136b31, _0x8e23c8[_0x302743 + 11], 10, 3174756917);
    _0x136b31 = _0x1c7b17(_0x136b31, _0x21d391, _0x500be3, _0x4714cb, _0x8e23c8[_0x302743 + 2], 15, 718787259);
    _0x4714cb = _0x1c7b17(_0x4714cb, _0x136b31, _0x21d391, _0x500be3, _0x8e23c8[_0x302743 + 9], 21, 3951481745);
    _0x500be3 = _0x3c3116(_0x500be3, _0x9a8a78);
    _0x4714cb = _0x3c3116(_0x4714cb, _0x52018c);
    _0x136b31 = _0x3c3116(_0x136b31, _0x4658c1);
    _0x21d391 = _0x3c3116(_0x21d391, _0x52a364);
  }
  return (_0x1530d7(_0x500be3) + _0x1530d7(_0x4714cb) + _0x1530d7(_0x136b31) + _0x1530d7(_0x21d391)).toLowerCase();
}
const https = require("https");
const http = require("http");
async function updateCK() {
  const _0x6a1f8d = {
    path: "https://waimai-guide.ele.me/h5/mtop.alsc.personal.queryminecenter/1.0/?jsv=2.6.2&appKey=12574478",
    hostname: "waimai-guide.ele.me",
    headers: {}
  };
  _0x6a1f8d.headers.Cookie = t;
  _0x6a1f8d.headers["User-Agent"] = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.87 Safari/537.36";
  return new Promise(_0x2cada0 => {
    https.get(_0x6a1f8d, _0x57a87a => {
      _0x57a87a.on("data", async _0x477829 => {
        var _0x4bc99c = JSON.stringify(_0x57a87a.headers["set-cookie"]);
        n = /_m_h5_tk=(\S*);/;
        a = _0x4bc99c.match(n)[1];
        o = " _m_h5_tk=" + a.split(";")[0];
        n = /_m_h5_tk_enc=(\S*);/;
        a = _0x4bc99c.match(n)[1];
        var _0x31eea5 = " _m_h5_tk_enc=" + a.split(";")[0];
        setCookie(o, _0x31eea5);
        await checkCk();
        _0x2cada0(_0x477829);
      });
    });
  });
}
function setCookie(_0x1334d7, _0x1a5719) {
  let _0x280b3e = false;
  for (var _0x57d5ac = t.split(";"), _0x5e016a = 0; _0x5e016a < _0x57d5ac.length; _0x5e016a++) {
    var _0x55e3c8 = _0x57d5ac[_0x5e016a].split("=");
    if (["_m_h5_tk", " _m_h5_tk"].indexOf(_0x55e3c8[0]) > -1) {
      _0x280b3e = true;
      _0x57d5ac[_0x5e016a] = _0x1334d7;
    }
    if ([" _m_h5_tk_enc", "_m_h5_tk_enc"].indexOf(_0x55e3c8[0]) > -1) {
      _0x57d5ac[_0x5e016a] = _0x1a5719;
      _0x280b3e = true;
    }
  }
  var _0x308356 = "";
  if (_0x280b3e) {
    for (_0x5e016a = 0; _0x5e016a < _0x57d5ac.length; _0x5e016a++) {
      _0x308356 += _0x57d5ac[_0x5e016a];
      _0x5e016a != _0x57d5ac.length - 1 && (_0x308356 += ";");
    }
  } else {
    _0x308356 = t + ";" + _0x1334d7 + ";" + _0x1a5719;
  }
  t = _0x308356;
}
function checkCk() {
  let _0x1adb35 = getToken(t);
  const _0x67a83b = {
    Cookie: t,
    "User-Agent": User_Agent
  };
  _0x1adb35 = _0x1adb35.split("_")[0];
  r = {};
  o = JSON.stringify(r);
  c = 12574478;
  u = new Date().getTime();
  l = sign(_0x1adb35 + "&" + u + "&" + c + "&" + o);
  d = _0x67a83b;
  const _0xd1884c = {
    Cookie: t,
    "User-Agent": User_Agent
  };
  const _0x496025 = {
    hostname: "shopping.ele.me",
    port: 443,
    path: "/h5/mtop.alsc.user.session.ele.check/1.0/?H5Request=true&api=mtop.alsc.user.session.ele.check&appKey=12574478&data={}&dataType=json&jsv=2.6.2&mainDomain=ele.me&pageDomain=ele.me&sign=" + l + "&subDomain=shopping&t=" + u + "&timeout=5000&type=json&v=1.0",
    headers: _0xd1884c
  };
  return new Promise((_0x39e62d, _0x885e2b) => {
    https.get(_0x496025, _0x3169c2 => {
      _0x3169c2.on("data", _0x5a7e73 => {
        const _0x2437f4 = JSON.parse(_0x5a7e73.toString());
        if (_0x2437f4.data.errorCode === "000502") {
          console.log(" 需要登录, 请重新登录");
          process.exit(1);
        }
        if (_0x2437f4.ret.includes("FAIL_SYS_TOKEN_EXOIRED::令牌过期") || _0x2437f4.ret.includes("FAIL_SYS_TOKEN_EMPTY::令牌为空")) {
          console.log(" cookie失效，正在更新cookie");
          updateCK();
        }
        _0x39e62d();
      });
    });
  });
}
async function runOne(_0x46b59c, _0x17f6a6, _0x45dced = "SIMPLESIGNIN") {
  l = getToken(t);
  l = l.split("_")[0];
  f = 12574478;
  d = new Date().getTime();
  p = "%7B%22callSource%22%3A%22biz_code_main%22%2C%22extra%22%3A%22%7B%5C%22missionCollectionId%5C%22%3A" + _0x17f6a6 + "%2C%5C%22missionDefId%5C%22%3A%5C%22" + _0x46b59c + "%5C%22%2C%5C%22missionType%5C%22%3A%5C%22" + _0x45dced + "%5C%22%2C%5C%22source%5C%22%3A%5C%22mtop%5C%22%7D%22%2C%22latitude%22%3A%2230.458638%22%2C%22longitude%22%3A%22104.458638%22%2C%22resId%22%3A%22223166%22%7D;";
  v = sign(l + "&" + d + "&" + f + "&" + decodeURIComponent(p));
  url = "https://mtop.ele.me/h5/mtop.alibaba.svip.langrisser.act/1.0/?api=mtop.alibaba.svip.langrisser.act&app=ele&appKey=12574478&data=" + p + "&jsv=2.6.2&sign=" + v + "&t=" + d + "";
  const _0x2f00b4 = {
    Cookie: t,
    "User-Agent": User_Agent
  };
  return new Promise(_0x229061 => {});
}
function getRunOnTaskId() {
  let _0xf8c5c9 = "";
  return new Promise(_0x19f4f4 => {
    http.get(ENV_ADDRESS + "/ele_task.json", _0x5dcb6a => {
      _0x5dcb6a.on("data", _0x1fc421 => {
        _0xf8c5c9 += _0x1fc421.toString();
      });
      _0x5dcb6a.on("end", () => {
        data = JSON.parse(_0xf8c5c9.toString());
        _0x19f4f4(data);
      });
    });
  });
}
async function runOneTask() {
  let _0x5b9a7c = await getRunOnTaskId();
  for (let _0x2ffbd3 = 0; _0x2ffbd3 < _0x5b9a7c.length; _0x2ffbd3++) {
    const _0x33b2cc = _0x5b9a7c[_0x2ffbd3];
    let _0x3cbfbf = await runOne(_0x33b2cc.missionDefId, _0x33b2cc.missionCollectionId);
    console.log(" 当前任务:" + (_0x3cbfbf.data.msgInfo || "success") + "开始执行下一个任务");
    await wait(4);
  }
}
async function runOne15(_0x14694f, _0xba03d6, _0x117cfd) {
  u = getToken(t);
  l = new Date().getTime();
  const _0x58b170 = {
    collectionId: _0xba03d6,
    missionId: _0x14694f,
    actionCode: "PAGEVIEW",
    pageFrom: _0x117cfd,
    viewTime: 15,
    bizScene: "svip",
    accountPlan: "HAVANA_COMMON",
    sync: !0,
    asac: "2A21119A45TTVAEXP40N7N",
    ua: "defaultUA1_uab_not_loaded@@https://air.tb.ele.me/app/conch-page/svip-home-tasklist-new/home@@" + l,
    umidtoken: "defaultToken1_um_not_loaded@@https://air.tb.ele.me/app/conch-page/svip-home-tasklist-new/home@@" + l
  };
  u = u.split("_")[0];
  d = JSON.stringify(_0x58b170);
  f = 12574478;
  h = sign(u + "&" + l + "&" + f + "&" + d);
  const _0x4850bf = {
    Cookie: t,
    Host: "mtop.ele.me",
    "x-ttid": "1601274962374@eleme_ios_10.9.35"
  };
  p = _0x4850bf;
  v = "/h5/mtop.ele.biz.growth.task.event.pageview/1.0/?jsv=2.6.2&appKey=" + f + "&t=" + l + "&sign=" + h + "&api=mtop.ele.biz.growth.task.event.pageview&v=1.0&timeout=5000&subDomain=mtop&mainDomain=ele.me&pageDomain=ele.me&type=originaljson&dataType=json&ttid=1601274962374@eleme_ios_10.9.35&data=" + encodeURIComponent(d);
  const _0xb469ee = {
    hostname: p.Host,
    port: 443,
    headers: p,
    path: v
  };
  let _0x34f43a = "";
  return new Promise(_0x371cb8 => {
    https.get(_0xb469ee, _0x27e801 => {
      _0x27e801.on("data", _0x3998d7 => {
        _0x34f43a = _0x3998d7.toString();
      });
      _0x27e801.on("end", () => {
        _0x371cb8(JSON.parse(_0x34f43a));
      });
    });
  });
}
async function runOneTaskPageView(_0x58404f, _0x177866) {
  l = getToken(t);
  l = l.split("_")[0];
  const _0x19bb45 = {
    Cookie: t,
    "User-Agent": User_Agent
  };
  d = _0x19bb45;
  f = 12574478;
  h = new Date().getTime();
  p = "%7B%22callSource%22%3A%22biz_code_main%22%2C%22extra%22%3A%22%7B%5C%22missionCollectionId%5C%22%3A" + _0x177866 + "%2C%5C%22missionDefId%5C%22%3A%5C%22" + _0x58404f + "%5C%22%2C%5C%22missionType%5C%22%3A%5C%22" + "PAGEVIEW" + "%5C%22%2C%5C%22source%5C%22%3A%5C%22mtop%5C%22%7D%22%2C%22latitude%22%3A%2230.458638%22%2C%22longitude%22%3A%22104.458638%22%2C%22resId%22%3A%22223166%22%7D;";
  p1 = JSON.stringify({
    callSource: "biz_code_main",
    extra: JSON.stringify({
      missionCollectionId: _0x177866,
      missionDefId: _0x58404f,
      missionType: "PAGEVIEW",
      source: "mtop"
    }),
    latitude: 30.458638,
    longitude: 104.458638,
    resId: 223166
  });
  v = sign(l + "&" + h + "&" + f + "&" + p1);
  _ = "https://waimai-guide.ele.me/h5/mtop.alibaba.svip.langrisser.act/1.0/?api=mtop.alibaba.svip.langrisser.act&app=ele&appKey=12574478&data=" + escape(p1) + "&jsv=2.6.2&sign=" + v + "&t=" + h;
  return new Promise(_0x482614 => {});
}
function getRunOne15TaskId() {
  let _0x5a9fd7 = "";
  return new Promise(_0x32e2b7 => {
    http.get(ENV_ADDRESS + "/ele_task_15.json", _0x25df7b => {
      _0x25df7b.on("data", _0x59b7b9 => {
        _0x5a9fd7 += _0x59b7b9.toString();
      });
      _0x25df7b.on("end", _0x94e81f => {
        _0x94e81f = JSON.parse(_0x5a9fd7);
        _0x32e2b7(_0x94e81f);
      });
    });
  });
}
async function runOne15Task() {
  let _0x1febfe = await getRunOne15TaskId();
  for (let _0x123094 = 0; _0x123094 < _0x1febfe.length; _0x123094++) {
    const _0x49822b = _0x1febfe[_0x123094];
    try {
      await runOne(_0x49822b.missionDefId, _0x49822b.missionCollectionId, "PAGEVIEW");
    } catch {}
    console.log(" 浏览完成，开始执行下一个任务");
    await wait(11);
    let _0x12ea96 = await runOne15(_0x49822b.missionDefId, _0x49822b.missionCollectionId, _0x49822b.pageFrom);
    console.log(" " + (_0x12ea96.data.message || "success✅"));
    if (_0x123094 === _0x1febfe.length - 1) {
      console.log(" 任务已经全部执行完啦!😊");
    } else {
      console.log(" 浏览任务完成，开始执行下一个任务");
    }
  }
}
function getCoupsRecord() {
  const _0x560be9 = {
    Cookie: t,
    "User-Agent": User_Agent
  };
  const _0x4c48fc = {
    path: "https://h5.ele.me/restapi/svip_biz/v1/supervip/foodie/records?latitude=30.153352&limit=20&longitude=104.153352&offset=0",
    hostname: "h5.ele.me",
    headers: _0x560be9
  };
  let _0xf3b000 = "";
  return new Promise(_0xf14c64 => {
    https.get(_0x4c48fc, _0x46df41 => {
      _0x46df41.on("data", _0x218034 => {
        _0x218034 = _0x218034.toString();
        _0xf3b000 += _0x218034;
      });
      _0x46df41.on("end", () => {
        _0xf14c64(JSON.parse(_0xf3b000));
      });
    });
  });
}
function signIn() {
  a = getToken(t);
  a = a.split("_")[0];
  const _0x5cc814 = {
    "content-type": "application/json",
    Cookie: t,
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.87 Safari/537.36"
  };
  headers = _0x5cc814;
  r = 12574478;
  c = new Date().getTime();
  l = "{\"bizScene\":\"svip_sign_scene\",\"asac\":\"2A227051WYEVFLNT5WTFAM\",\"unionId\":\"o_PVDuGAltr6cWSNlAI_vhPxlmRc\",\"latitude\":\"32.114736\",\"longitude\":\"119.414544\"}";
  d = sign(a + "&" + c + "&" + r + "&" + l);
  f = "https://mtop.ele.me/h5/mtop.koubei.interactioncenter.sign.component.recordsignin/1.0/?jsv=2.6.2&appKey=12574478&t=" + c + "&sign=" + d + "&api=mtop.koubei.interactioncenter.sign.component.recordsignin&v=1.0&type=originaljson&dataType=json&dangerouslySetWindvaneParams=%7B%22instanceid%22%3A%22INNER%22%7D&xua=true&location=true&isSec=1&needWua=true&isNeedwua=true&secType=2&timeout=8000&valueType=original&ttid=wxece3a9a4c82f58c9%40wechat_android_10.11.7&data=" + encodeURIComponent(l);
  const _0x2060a4 = {
    hostname: "mtop.ele.me",
    headers: headers,
    path: f
  };
  let _0x1e9425 = "";
  return new Promise(_0xf2ff18 => {
    https.get(_0x2060a4, _0x48d1e4 => {
      _0x48d1e4.on("data", _0x3083c8 => {
        _0x1e9425 += _0x3083c8.toString();
        setTimeout(() => {
          _0xf2ff18(JSON.parse(_0x1e9425));
        }, 500);
      });
    });
  });
}
const getUserInfo = () => {
  const _0x294abb = {
    Cookie: t,
    "user-agent": User_Agent
  };
  const _0x488655 = {
    hostname: "restapi.ele.me",
    path: "/eus/v5/user_detail",
    headers: _0x294abb
  };
  let _0x14606d = "";
  return new Promise(_0x4f83c8 => {
    https.get(_0x488655, _0x3ba277 => {
      _0x3ba277.on("data", _0x4c2ff3 => {
        _0x14606d += _0x4c2ff3.toString();
        setTimeout(() => {
          _0x4f83c8(JSON.parse(_0x14606d));
        }, 500);
      });
    });
  });
};
const validateCarme = () => {
  const _0x54b304 = "http://120.46.206.153:8080/checkkami?carmi=" + process.env.ELE_CARME;
  let _0x2b472a = "";
  return new Promise((_0x2307c2, _0xbd7ada) => {
    http.get(_0x54b304, _0x438a56 => {
      _0x438a56.on("data", _0x20d0ac => {
        _0x2b472a += _0x20d0ac.toString();
        setTimeout(() => {
          _0x2307c2(JSON.parse(_0x2b472a));
        }, 500);
      });
    });
  });
};
(async function a() {
  let _0x208836 = await validateCarme();
  if (_0x208836.code !== 20000) {
    console.error(_0x208836.message);
    process.exit(0);
  }
  for (let _0x442b16 = 0; _0x442b16 < CookieEles.length; _0x442b16++) {
    t = CookieEles[_0x442b16];
    if (!t) {
      console.log(" ❌无效用户信息, 请重新获取ck");
      process.exit(0);
    }
    let _0x5141d6 = await getUserInfo();
    console.log("【账号🆔】:", _0x5141d6.username);
    await checkCk();
    let _0x3292c8 = await getCoupsRecord();
    console.log("【当前吃货豆😋】:", _0x3292c8.peaCount);
    let _0x4bc391 = await signIn();
    if (_0x4bc391.data.errorMsg) {
      console.log("【签到信息】:", _0x4bc391.data.popupTitle || _0x4bc391.data.errorMsg);
    }
    await runOneTask();
    await runOne15Task();
    let _0xcb08cc = await getCoupsRecord();
    console.log("【当前吃货豆😋】:", _0xcb08cc.peaCount, "本次获取吃货豆😋", _0xcb08cc.peaCount - _0x3292c8.peaCount);
  }
  process.exit(0);
})();
function wait(_0x46c635) {
  return new Promise(_0x2bc413 => {
    setTimeout(() => {
      _0x2bc413();
    }, _0x46c635 * 1000);
  });
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = "POST";
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            this.initGotEnv(t);
            const {
              url: s,
              ...i
            } = t;
            this.got.post(s, i).then(t => {
              const {
                statusCode: s,
                statusCode: i,
                headers: r,
                body: o
              } = t;
              e(null, {
                status: s,
                statusCode: i,
                headers: r,
                body: o
              }, o);
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
            });
          }
        }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}