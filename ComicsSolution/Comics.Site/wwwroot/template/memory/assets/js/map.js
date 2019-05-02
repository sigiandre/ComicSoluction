
		jQuery(document).ready(function() {
			jQuery(window).load(function() {
				mk_google_maps();
			});
		});
		function mk_google_maps() {
			jQuery('.ts-advanced-gmaps').each(function() {
				var $this = jQuery(this),
				  $id 	= $this.attr('id'),
				  $zoom = parseInt($this.attr('data-zoom')),
				  $latitude = $this.attr('data-latitude'),
				  $longitude = $this.attr('data-longitude'),
				  $address = $this.attr('data-address'),
				  $latitude_2 = $this.attr('data-latitude2'),
				  $longitude_2 = $this.attr('data-longitude2'),
				  $address_2 = $this.attr('data-address2'),
				  $latitude_3 = $this.attr('data-latitude3'),
				  $longitude_3 = $this.attr('data-longitude3'),
				  $address_3 = $this.attr('data-address3'),
				  $map_type = $this.attr('data-map-type'),
				  $pin_icon = $this.attr('data-pin-icon'),
				  $pan_control = $this.attr('data-pan-control') === "true" ? true : false,
				  $map_type_control = $this.attr('data-map-type-control') === "true" ? true : false,
				  $scale_control = $this.attr('data-scale-control') === "true" ? true : false,
				  $draggable = $this.attr('data-draggable') === "true" ? true : false,
				  $zoom_control = $this.attr('data-zoom-control') === "true" ? true : false,
				  $modify_coloring = $this.attr('data-modify-coloring') === "true" ? true : false,
				  $saturation = $this.attr('data-saturation'),
				  $hue = $this.attr('data-hue'),
				  $lightness = $this.attr('data-lightness'),
				  $styles;
				if ($modify_coloring == true) {
				  var $styles = [{
					stylers: [{
					  hue: $hue
					}, {
					  saturation: $saturation
					}, {
					  lightness: $lightness
					}, {
					  featureType: "landscape.man_made",
					  stylers: [{
						visibility: "on"
					  }]
					}]
				  }];
				}
				var map;
				function initialize()
				{            
				  var bounds = new google.maps.LatLngBounds();
				  var mapOptions = {
					zoom: $zoom,
					panControl: $pan_control,
					zoomControl: $zoom_control,
					mapTypeControl: $map_type_control,
					scaleControl: $scale_control,
					draggable: $draggable,
					scrollwheel: false,
					mapTypeId: google.maps.MapTypeId[$map_type],
					styles: $styles
				  };
				  map = new google.maps.Map(document.getElementById($id), mapOptions);
				  map.setTilt(45);
				  // Multiple Markers
				  var markers = [];
				  var infoWindowContent = [];
				  if ($latitude != '' && $longitude != '') {
					markers[0] = [$address, $latitude, $longitude];
					infoWindowContent[0] = [$address];
				  }
				  if ($latitude_2 != '' && $longitude_2 != '') {
					markers[1] = [$address_2, $latitude_2, $longitude_2];
					infoWindowContent[1] = [$address_2];
				  }
				  if ($latitude_3 != '' && $longitude_3 != '') {
					markers[2] = [$address_3, $latitude_3, $longitude_3];
					infoWindowContent[2] = [$address_3];
				  }
				  var infoWindow = new google.maps.InfoWindow(), marker, i;
				  for (i = 0; i < markers.length; i++)
				  {
					var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
					bounds.extend(position);
					marker = new google.maps.Marker({
					  position: position,
					  map: map,
					  title: markers[i][0],
					  icon: $pin_icon
					});
					google.maps.event.addListener(marker, 'click', (function(marker, i) {
					  return function() {
						if(infoWindowContent[i][0].length > 1) {                                  
							infoWindow.setContent('<div style="color:#000; padding:5px; width:200px;"><h4 style="color:#000;">Themestudio</h4><p style="color:#5d5d5d;">Ngõ 176 Z115, Tân Thịnh, tp. Thái Nguyên, Thái Nguyên, Việt Nam</p><a href="mailto:themestudio@gmail.com" style="#cda993;">  themestudio@gmail.com</a></div>');
							infoWindow.backgroundColor = '#252525';
						}
						infoWindow.open(map, marker);
					  }
					})(marker, i));
					map.fitBounds(bounds);
				  }
				  var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
					this.setZoom($zoom);
					google.maps.event.removeListener(boundsListener);
				  });                          
				}
				initialize();
				function googleMapsResize() {                          
				  initialize();
				} 
				var temporaryTabsContainer = jQuery('.mk-tabs');
				if (temporaryTabsContainer.length) {
				  temporaryTabsContainer.each(function() {
					google.maps.event.addDomListener($(this)[0], "click", googleMapsResize);
				  });
				}
				var fullHeight = $this.hasClass('full-height-map');
				function fullHeightMap()
				{
					if (fullHeight)
					{
						var $window_height = jQuery(window).outerHeight(), wp_admin_height = 0, header_height = 0;
						if(jQuery.exists('#mk-header .mk-header-holder')) {
							header_height = parseInt(jQuery('#mk-header').attr('data-sticky-height'));  
						}   
						if (jQuery.exists("#wpadminbar")) {
							var wp_admin_height = jQuery("#wpadminbar").outerHeight();
						}
						$window_height = $window_height - wp_admin_height - header_height;
						$this.css('height', $window_height);
					}
				}
				fullHeightMap();
				jQuery(window).on('debouncedresize', fullHeightMap);
		});
	}
									