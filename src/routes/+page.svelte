<script>
  import { getPublicFileUrl } from '$lib/storage'

  const bgUrl = getPublicFileUrl('portfolio-assets', 'bg/bg1.png')
</script>

<div id="hero-image" class="relative w-full h-170 overflow-hidden rounded-lg">
  <img src={bgUrl} alt="Test Bg" />
</div>
