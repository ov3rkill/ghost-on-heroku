$(function() {

	const chat = $(".chat"),
				btnShowChat = $(".btn--show-chat"),
				sidebar = $(".sidebar"),
				btnShowSidebar = $(".btn--show-sidebar"),
				container = $(".container-custom	"),
				mobileMenuShift = $(".mobile-menu-shift")
				navItemBulb = $(".nav-item--bulb"),
				navItemNotifications = $(".nav-item--notifications");

	initMediaQueries();
	onResize();
	onShowSidebar();
	onShowChat();


	function initMediaQueries() {
		
		if (window.matchMedia('(min-width: 1440px)').matches) {
			sidebar.removeClass("d-none")
			chat.removeClass("d-none")
			container.addClass("padding--sidebar-active padding--chat-active")
			btnShowSidebar.removeClass("active")
			btnShowChat.removeClass("active")
			navItemBulb.append($(".btn--bulb"))
			navItemNotifications.append($(".dropdown--notificatios"))
		}
		
		if (window.matchMedia('(min-width: 992px) and (max-width: 1439px)').matches) {
			sidebar.removeClass("d-none")
			chat.removeClass("d-none")
			container.addClass("padding--sidebar-active padding--chat-active")
			btnShowSidebar.removeClass("active")
			btnShowChat.removeClass("active")
			navItemBulb.append($(".btn--bulb"))
			navItemNotifications.append($(".dropdown--notificatios"))
		}
		
		if (window.matchMedia('(min-width: 768px) and (max-width: 991px)').matches) {
			sidebar.addClass("d-none")
			chat.removeClass("d-none")
			container.addClass("padding--chat-active")
			container.removeClass("padding--sidebar-active")
			btnShowSidebar.addClass("active")
			btnShowChat.removeClass("active")
			mobileMenuShift.append($(".btn--bulb")).append($(".dropdown--notificatios"))
		}
		
		if (window.matchMedia('(max-width: 767px)').matches) {
			sidebar.addClass("d-none")
			chat.addClass("d-none")
			btnShowSidebar.addClass("active")
			btnShowChat.addClass("active")
			container.removeClass("padding--sidebar-active padding--chat-active")
			mobileMenuShift.append($(".btn--bulb")).append($(".dropdown--notificatios"))
		}
	}

	function onResize() {
		$(window).on("resize", function() {
			initMediaQueries();
		})
	}

	function onShowSidebar() {
		btnShowSidebar.on("click", function() {
			if (window.matchMedia('(max-width: 991px)').matches) {
				chat.addClass("d-none")
				container.removeClass("padding--chat-active")
				btnShowChat.addClass("active")					
			}

			if (sidebar.is(":visible")) {
				sidebar.addClass("d-none")
				container.removeClass("padding--sidebar-active")
				btnShowSidebar.addClass("active")
			} else {
				sidebar.removeClass("d-none")
				container.addClass("padding--sidebar-active")
				btnShowSidebar.removeClass("active")
			}
		})
	}

	function onShowChat() {
		btnShowChat.on("click", function() {
			if (window.matchMedia('(max-width: 991px)').matches) {
				sidebar.addClass("d-none")
				container.removeClass("padding--sidebar-active")
				btnShowSidebar.addClass("active")										
			}

			if (chat.is(":visible")) {
				chat.addClass("d-none")
				container.removeClass("padding--chat-active")
				btnShowChat.addClass("active")
			} else {
				chat.removeClass("d-none")
				container.addClass("padding--chat-active")
				btnShowChat.removeClass("active")
			}
		})
	}

});
