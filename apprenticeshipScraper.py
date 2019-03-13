import requests

page = requests.get("https://apprenticeships.me/")

# Page (should get status code 200 as a response here)

from bs4 import BeautifulSoup
soup = BeautifulSoup(page.content, 'html.parser')

# print(soup.prettify())

arr = soup.find_all('p', class_='text-grey-darker text-base')

i = 0
while i < len(arr):
    print(arr[i].get_text())
    print(" ")
    i += 1