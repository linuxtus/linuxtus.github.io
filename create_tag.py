import glob
import os

post_dir = '_posts/'
tag_dir = 'tag/'
filenames = []

for folder in os.listdir():
    if os.path.isdir(folder + "/_posts"):
        for f in os.listdir(folder + "/_posts"):
            filenames.append(folder + "/_posts/" + f)

total_tags = []
for filename in filenames:
    f = open(filename, 'r', encoding='utf8')
    crawl = False
    for line in f:
        if crawl:
            current_tags = line.strip().split()
            if current_tags[0] == 'tags:':
                total_tags.extend(current_tags[1:])
                crawl = False
                break
        if line.strip() == '---':
            if not crawl:
                crawl = True
            else:
                crawl = False
                break
    f.close()

total_tags = set(total_tags)

old_tags = glob.glob(tag_dir + '*.md')
for tag in old_tags:
    os.remove(tag)
    
if not os.path.exists(tag_dir):
    os.makedirs(tag_dir)

for tag in total_tags:
    tag_filename = tag_dir + tag + '.md'
    f = open(tag_filename, 'a')
    write_str = f'---\nlayout: tag_page\ntitle: {tag.capitalize()} Tag\ntag: ' + tag + '\nnocanonical: true\nfollow-noindex: true\npagination:\n  enabled: true\n  tag: ' + tag + ' \n---\n'
    f.write(write_str)
    f.close()

f = open(tag_dir + "index.html", 'a')
f.write('<!DOCTYPE html> <head> <meta name="robots" content="noindex"> <meta http-equiv="refresh" content="0; url=/404.html"> </head> <body> </body>')
f.close()

print("Tags generated, count", total_tags.__len__())
