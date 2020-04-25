<script>
	import { isRunning } from './State'
</script>

<div class="animator">
	<div class="draw">
		<div class="machine">
			<div class="inside">
				<div class="spin">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.506 32.506" class="spinner"
						style="animation-play-state: {$isRunning ? 'running' : 'paused'}">
						<defs>
							<radialGradient gradientTransform="matrix(1 0 0 1.14149 0 -28.288)" r="13.229" fy="199.147" fx="51.313"
								cy="199.147" cx="51.313" id="a" gradientUnits="userSpaceOnUse">
								<stop offset="0" stop-color="#e2e6ec" />
								<stop offset="1" stop-color="#e7e9f0" />
							</radialGradient>
						</defs>
						<g transform="translate(-34.979 -183.04)">
							<circle r="16.198" cy="199.238" cx="51.177" fill-opacity=".04" paint-order="markers stroke fill" />
							<path
								d="M35.183 196.843s8.49-2.48 12.253-4.714c3.564-2.118 9.473-8.06 9.473-8.06l4.354 2.478s-2.03 7.846-2.035 11.855c-.008 4.504 2.24 13.325 2.24 13.325l-4.316 2.544s-6.212-6.1-9.96-8.214c-3.682-2.078-11.964-4.204-11.964-4.204l-.045-5"
								fill-opacity=".08" />
							<path
								d="M59.2 185.125a16.2 16.2 0 00-2.281-1.056c-2.605 3.97-3.73 8.954-7.904 11.4-3.955 2.526-9.28 1.328-13.822 1.365a16.2 16.2 0 00.045 5.01c4.74.272 9.622-1.248 13.838 1.14 4.163 2.16 5.786 7.366 8.087 11.278a16.2 16.2 0 004.316-2.544c-2.134-4.238-5.886-7.702-5.925-12.544-.21-4.683 3.484-8.7 5.72-12.636a16.2 16.2 0 00-2.073-1.422z"
								fill="url(#a)" paint-order="markers stroke fill" />
						</g>
					</svg>
				</div>
			</div>
		</div>
	</div>
</div>