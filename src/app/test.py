import requests
url = "https://theinternship.io/"
data = requests.get(url)
from bs4 import BeautifulSoup

soup = BeautifulSoup(data.text,'html.parser')
x = soup.find_all("img",{"class":"center-logos"})

comimg = []
for i in x:
    comimg.append(i['src'])


x = soup.find_all("span",{"class":"list-company"})
comtitle =[]
for i in x:
    comtitle.append(i.text)


compart = []

for i in comimg:
    for j in comtitle:
        compart.append({"img" :i ,"title" : j ,"len" :len(j)})

def myFunc(e):
  return e['len']

compart.sort(key=myFunc)

for i in compart:
    print(i['img'])
