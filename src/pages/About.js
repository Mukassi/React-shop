import styles from "./pages.module.css"
import aboutImg from "./../images/AboutImg.jpg"
const About =() => {
  return (
    <div className={styles.aboutContainer}>
      <img src={aboutImg} alt="Build" className={styles.aboutImg}/>
      <div>
      <h1>About</h1>
    <p>An internet shop, also known as an online store or e-commerce website, is a type of business platform that allows customers to purchase products or services directly from the website through the internet. Customers can browse and select products from a digital catalog, view product information, and complete transactions through a secure online payment system. The website typically includes features such as a shopping cart, customer reviews, search functionality, and various other tools to make the shopping experience as convenient as possible for the customer. Internet shops are often operated by businesses of all sizes, from small, independent retailers to large multinational corporations, and offer a wide range of products, from electronics and clothing to groceries and household goods. They offer the convenience of shopping from home, 24/7 availability, and access to a much larger selection of products than a traditional brick-and-mortar store.</p>
      </div>
</div>
  )
}

export default About