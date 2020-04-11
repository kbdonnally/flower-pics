# print_image_links.py

import glob
from PIL import Image

list   = glob.glob('../img/unsplash/*.jpg')
titles = [x.split('unsplash\\')[1] for x in list]
widthHeight = []

def printDimensions(titles):
	for title in titles:
		im = Image.open('../img/unsplash/' + title)
		width, height = im.size
		widthHeight.append([width, height])
	return widthHeight

dimensions = printDimensions(titles)

for i, (title, dim) in enumerate(zip(titles, dimensions)):
	width = dim[0]
	height = dim[1]
	myString = f'- title: {title}\n  width: {width}\n  height: {height}\n  index: {i+1}\n  category:\n  tags:\n'
	print(myString)