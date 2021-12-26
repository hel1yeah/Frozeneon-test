<template>
  <footer class="footer">
    <ul class="footer__list">
      <li class="footer__list--item">
        <a
          class="footer__list--item-link"
          target="_blank"
          href="https://github.com/hel1yeah"
          ><img
            class="footer__list--item-img"
            src="./../assets/images/github.svg"
            alt="github"
        /></a>
      </li>
      <li class="footer__list--item">
        <a
          class="footer__list--item-link"
          target="_blank"
          href="https://hel1yeah.github.io/"
          ><img
            class="footer__list--item-img"
            src="https://github.com/hel1yeah/hel1yeah/raw/main/images/hel1-logo.svg"
            alt="hel1_yeah"
        /></a>
      </li>
      <li class="footer__list--item">
        <a
          target="_blank"
          class="footer__list--item-link"
          href="https://www.linkedin.com/in/yura-larsen/"
          ><img
            class="footer__list--item-img"
            src="https://github.com/hel1yeah/hel1yeah/raw/main/images/linkedin.svg"
            alt="Limkedin"
        /></a>
      </li>
    </ul>
  </footer>
</template>
<script>
export default {
  name: 'AppFooter',
};
</script>
<style lang="scss">
.footer {
  flex-shrink: 0;
  padding: 10px 0;
  background-color: rgb(153, 67, 252);
}
.footer__list {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.footer__list--item {
  transition: 0.5s;
  &:hover {
    transform: translateY(-10px);
  }
}
.footer__list--item-img {
  max-width: 40px;
}
</style>
