<article class="single_post">	
	<h1><?php echo $post->title; ?></h1>
	
	<p>
	Go back to the
	<a href="{{ url:site }}blog" >Blog</a>
	<?php if(isset($post->category)) : ?>
		
					, <a href="{{ url:site }}blog/category/<?php echo $post->category->slug ?>">
						<?php echo $post->category->title ?>
					</a>
	<?php endif; ?>


	<?php if( $post->keywords > 0 ) : ?>
	
		<span class="tags">
			<?php foreach ($post->keywords as $keyword) : ?>
				,&nbsp;<?php echo anchor('blog/tagged/'.str_replace(' ', '-', $keyword->name), $keyword->name, 'class="keyword"') ?>
			<?php endforeach; ?>
		</span>

	<?php endif; ?>
	.</p>
			
	<div class="post_date">
		<span class="date">
			This was published <?php $now = time(); $posted = date($post->created_on); echo timespan($posted, $now); ?> ago.
		</span>
	</div>
	

            <a href="https://twitter.com/share" class="twitter-share-button" 
            data-lang="en" 
            data-count="none"
            data-text="a comic"
            data-url="{{ url:site }}<?php echo 'blog/'.date('Y/m', $post->created_on) .'/'. $post->slug; ?>"
            data-via="sanstreamed"
            >Share this on twitter!</a>

    		<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>

	<hr>

	<div class="post_body">
		<?php echo $post->body; ?>
	</div>
			
	<?php if ($post->comments_enabled): ?>
		<?php echo display_comments($post->id); ?>
	<?php endif; ?>


</article>