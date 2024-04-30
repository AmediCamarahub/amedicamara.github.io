const openBtn = document.querySelector(".js-open")
		const modalBg = document.getElementById("modal-background")
		const modalBox = document.getElementById("modal-box")
		openBtn.addEventListener('click', function(event) {
			event.preventDefault()
			modalBg.classList.add("active")
			modalBox.classList.add("active")
		})

		const closeBtn = document.querySelectorAll(".js-close")
		closeBtn.forEach(node => {
			console.log("node is", node)
			node.addEventListener('click', function(e) {
				e.preventDefault()
				modalBg.classList.remove("active")
				modalBox.classList.remove("active")
			})
		})