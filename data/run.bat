jupyter nbconvert --to script ./football/scraping.ipynb
jupyter nbconvert --to script ./esports/scraping.ipynb
cd football
python ./scraping.py
cd ../esports
python ./scraping.py
cd ..