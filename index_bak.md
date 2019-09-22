---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

<main id="scroll" class="home" aria-label="Content">
	<div class="container">
<!--
		<h1 class="page-heading">Posts</h1>

		{{ content }}
-->

				{% for post in site.posts %}
				<div class="row align-items-center no-gutters mb-4 mb-lg-5">
				

					<div class="col-xl-8 col-lg-7">
						<a href="{{ post.url | relative_url }}">
							{% capture namespace %}{{ post.id | split:"/" | last }}{% endcapture %}
							<img class="fit-picture" src="{{ site.url }}{{ post.id | remove: namespace }}thumb.jpg" alt="Article thumbnail">
						</a>
					</div>
					
					<div class="col-xl-4 col-lg-5">
						<div class="featured-text">
							<span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
							<a href="{{ post.url | relative_url }}">
								<h2>{{ post.title | escape }}</h2>
								<p>
									{{ post.content | strip_html | truncatewords:40 }}
									<br><a href="{{ post.url | prepend: site.baseurl }}" class="link">Read more</a>
								</p>
							</a>
						</div>
					</div>


				</div>
				{% endfor %}

		<p class="rss-subscribe">subscribe <a href="{{ '/feed.xml' | relative_url }}">via RSS</a></p>

	</div>
</main>