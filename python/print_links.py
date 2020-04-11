# print_links.py

categories = ['abstract', 'pattern', 'flowers', 'leaves', 'wood', 'hands', 'portraits']

for cat in categories:
	print(f"<h3><a href='#{cat}'>{cat.capitalize()}</a></h3>")