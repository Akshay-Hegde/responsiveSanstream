<?php if ( ! empty($blog) ): ?>
	<?php foreach ($blog as $post) : ?>
		


		<article class="post">
			<h2><?php echo  $post->title; ?></h2>
		

			
				<p class="post_category">
					This was published
					<?php if($post->category_slug) : ?>
						
						in:
						<a href="{{ url:site }}blog/category/<?php echo $post->category_slug ?>">
							<?php echo $post->category_title ?>
						</a>
					<?php endif; ?>

					<span class="date">
						about <?php $now = time(); $posted = date($post->created_on); echo timespan($posted, $now); ?> ago.
						And tagged as: 

						<?php if( $post->keywords > 0 ) : ?>
						
							<span class="tags">
								<?php foreach ($post->keywords as $keyword) : ?>
									<?php echo anchor('blog/tagged/'.str_replace(' ', '-', $keyword->name), $keyword->name, 'class="keyword"') ?>
								<?php endforeach; ?>
							</span>

						<?php endif; ?>

					</span>
				</p>
			<p class="post_intro">
				<?php echo $post->intro; ?>
			</p>
			<?php echo anchor('blog/' .date('Y/m', $post->created_on) .'/'. $post->slug, "Read more..."); ?>
            

		</article>

	<?php endforeach; ?>

	<?php echo $pagination['links']; ?>

<?php else: ?>
	<p><?php echo lang('blog_currently_no_posts');?></p>
<?php endif; ?>