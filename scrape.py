from bs4 import BeautifulSoup
import requests


root_url = "https://kpop.fandom.com/"


#these are the pages i think are the most relevant 
group_category_urls = [
    "/wiki/Category:Female_groups",
    "/wiki/Category:Male_groups",
    "/wiki/Category:Male_soloists",
    "/wiki/Category:Female_soloists"
]

#some groups i want to manually add 
group_urls = [
    "/wiki/NCT",
    "/wiki/MONSTA_X",
    "/wiki/Stray_Kids",
    "/wiki/Red_Velvet",
    "/wiki/MAMAMOO",
    "/wiki/BTS",
    "/wiki/BLACKPINK",
    "/wiki/TWICE",
    "/wiki/NewJeans"
    "/wiki/LE_SSERAFIM"
]


#return the html soup of a url
def get_html(url):
    url = root_url + url
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    return soup

#get trending groups
def get_trending_groups(category_page_url):
    '''given the page url of a group category, return a list of page urls of trending groups'''

    soup = get_html(category_page_url)
    trending_div = soup.find('ul', class_='category-page__trending-pages')
    hrefs = [a['href'] for a in trending_div.find_all('a')]

    return hrefs


#get members of trending groups
def get_members(group_page_url):
    '''given the page url of a group, return a list of page urls of all members'''
    
    soup = get_html(group_page_url)
    current_div = soup.find('div', attrs={'data-source': 'current'})
    hrefs = [a['href'] for a in current_div.find_all('a')]

    return hrefs

#get image and name from member page
def get_idol_data(member_url):
    '''given the page url of an idol, return dictionary with name and photo'''

    soup = get_html(member_url)

    #name 
    name_tag = soup.find('h2', attrs={'data-source': 'name'})
    name = name_tag.text

    #photo
    image_figure = soup.find('figure', attrs={'data-source': 'image'})
    image_url = image_figure.find('img')['src']

    return(name, image_url)


if __name__ == "__main__":
    # test_category_page = "/wiki/Category:Female_groups"
    # print(get_trending_groups(test_category_page))

    test_group_page = "wiki/NCT"
    print(get_members(test_group_page))

    # test_member_page = "/wiki/Pharita"
    # print(get_idol_data(test_member_page))

