from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import StaleElementReferenceException
import time

def scrape_page(url):
    driver = webdriver.Safari()
    count = 0
    driver.get(url)

    time.sleep(2)

    # Find the "Load more" button.
    load_more_button = driver.find_element(By.XPATH, "//*[@id='react-app']/div/div/div/div[2]/div[3]/div/div[2]/div[2]/button")

    # Click on the "Load more" button until it disappears or raises a StaleElementReferenceException.
    while True:
        try:
            load_more_button.click()
            count += 1
            print("Times: " + str(count))
            time.sleep(2)
        except StaleElementReferenceException:
            print("The load more button is no longer present.")
            break

    # Retrieve all elements with class name "DescriptionExcerpt"
    description_elements = driver.find_elements(By.CLASS_NAME, "DescriptionExcerpt")
    descriptions = [element.text for element in description_elements]

    # Find all div elements with the specified style attribute containing titles
    title_elements = driver.find_elements(By.XPATH, "//div[@style='font-size: 1.125rem; font-weight: 600; color: rgb(73, 73, 73); padding-left: 0.313rem; text-overflow: initial; margin-top: 0.313rem; overflow: initial; height: initial;']")
    titles = [element.text for element in title_elements]

    to_return = []

    for i in range(0, len(descriptions)):
      to_return.append((titles[i], descriptions[i]))

    driver.quit()
    return to_return

if __name__ == "__main__":
    url = "https://illinois.campuslabs.com/engage/organizations"
    to_return = scrape_page(url)

    # Convert the list of pairs to a multiline string with "title","description" format
    output_string = "\n".join([f'"{title.strip()}","{description.strip()}"' for title, description in to_return])

    # Print the output string
    print(output_string)

    # Write the output string to a file
    with open("output.txt", "w") as file:
        file.write(output_string)




