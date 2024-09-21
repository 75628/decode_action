#2024-09-21 13:04:56
import requests
import time
import os
code="临期批发"
ver="1.0"
envname="yuanshen_lqpf"
split_chars=['@','&','\n']
debug=False
debugcookie=""
def env(*args,**kwargs):
 def split_cookies(cookie,split_chars):
  for sep in split_chars:
   if sep in cookie:
    return cookie.split(sep)
  return[cookie]
 def scmain(cookies):
  for i,cookie in enumerate(cookies,1):
   print(f"--------开始第{i}个账号--------")
   main=yuanshen(cookie)
   main.main()
   print(f"--------第{i}个账号执行完毕--------")
 if not os.getenv(envname)and not debug:
  print(f"请先设置环境变量[{envname}]")
  exit()
 cookie=os.getenv(envname,"")
 if debug:
  cookie=debugcookie
 try:
  print(requests.get("https://gitee.com/HuaJiB/yuanshen34/raw/master/pubilc.txt").text,"\n\n\n")
 except:
  print("网络异常,链接公告服务器失败(gitee)，请检查网络")
  exit()
 cookies=split_cookies(cookie,split_chars)
 account_count=len(cookies)
 print(f"一共获取到{account_count}个账号")
 print(f"=========🔔开始执行[{code}][{ver}]=========\n")
 start_time=time.time()
 if debug:
  scmain(cookies)
 else:
  try:
   scmain(cookies,*args,**kwargs)
  except Exception as e:
   print(f"脚本执行出错: {e}")
 end_time=time.time()
 execution_time=end_time-start_time
 print(f"\n============🔔脚本[{code}]执行结束============")
 print(f"本次脚本总运行时间: [{execution_time:.2f}] 秒")
class yuanshen:
 def __init__(self,cookie):
  self.headers={"Host":"shop.linqishop.com","Connection":"keep-alive","charset":"utf-8","User-Agent":"Mozilla/5.0 (Linux; Android 14; 23113RKC6C Build/UKQ1.230804.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.120 Mobile Safari/537.36 XWEB/1220089 MMWEBSDK/20240404 MMWEBID/98 MicroMessenger/8.0.49.2600(0x28003133) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android","content-type":"application/json","Accept-Encoding":"gzip,compress,br,deflate","token":f"{cookie}","Referer":"https://servicewechat.com/wx8d6634ab1c322d3d/9/page-frame.html"}
 def main(self):
  url="https://shop.linqishop.com/api/policy/signAgent"
  data={"client":1,"channel":"pifa","app_version":"2.6.6"}
  r=requests.post(url,headers=self.headers,json=data).json()
  if r['code']==1:
   print("success")
  else:
   print(f"error")
  url="https://shop.linqishop.com/api/goods/getGoodsList"
  params={"page_no":"1","page_size":"10","platform_cate_id":"12","channel":"pifa","sort_by_create":"desc","app_version":"2.6.6"}
  r=requests.get(url,headers=self.headers,params=params).json()
  if r['code']==1:
   success=0
   for i in r['data']['lists']:
    postid=i.get('id')
    data={"goods_id":f"{postid}","from":"addsale","channel":"pifa","app_version":"2.6.6"}
    url="https://shop.linqishop.com/api/sale/add"
    r=requests.post(url,headers=self.headers,json=data).json()
    if r['code']==1:
     print(f"[{postid}] 添加成功")
    else:
     print(f"[{postid}] 添加失败[{r['msg']}]")
    time.sleep(3)
    url=f"https://shop.linqishop.com/api/order/add_cate_order?goods_id={postid}&client=1&channel=pifa&app_version=2.6.6"
    r=requests.get(url,headers=self.headers).json()
    if r['code']==1:
     time.sleep(3)
     orderid=r['data']['order_id']
     data={"from":"cate","order_id":f"{orderid}","pay_way":14,"type":"pifa","channel":"pifa","app_version":"2.6.6"}
     url="https://shop.linqishop.com/api/pay/unifiedpay"
     r=requests.post(url,headers=self.headers,json=data).json()
     if r['code']==20001:
      print(f"[{postid}] 开通权限成功")
      success+=1
     else:
      print(f"[{postid}] 开通权限失败[{r['msg']}]")
    else:
     print(f"[{postid}] 开通权限失败[{r['msg']}]")
    time.sleep(8)
    if success==3:
     break
  else:
   print(f"获取商品列表失败[{r['msg']}]")
if __name__=='__main__':
 env()
