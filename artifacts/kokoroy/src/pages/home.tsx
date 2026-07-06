import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import logoImg from "@assets/IMG_1978_1783356367913.jpeg";
import blackJastImg from "@assets/cb53ce3d-8adb-463e-b6c2-ba700afd47cc_1783356554882.jpeg";
import greyWashImg from "@assets/8330a7a5-85af-409e-9ce3-f23e86676aa3_1783356554882.jpeg";
import biowashBlueImg from "@assets/3c3c9474-5632-48b9-93cb-b8d673982056_1783356554882.jpeg";
import garmenBlueImg from "@assets/2a29937b-c939-4050-9e34-a9f9a6ee966c_1783356554882.jpeg";
import collectionImg from "@assets/cc796df1-5338-451b-a7c5-38aba24a6c0e_1783356554882.jpeg";
import gridCollectionImg from "@assets/a4bb4a04-6041-406d-8276-56e145ec8845_1783356554882.jpeg";
import sizeChartImg from "@assets/919764e8-e0f9-47e8-a52b-afafd86be836_1783356554882.jpeg";

const TOKOPEDIA_LINK = "https://vt.tokopedia.com/t/ZS9MFVCfUpn9a-qCmHM/";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const products = [
    {
      id: "black-jast",
      name: "Black Jast",
      desc: "Denim hitam premium dengan aksen pudar yang elegan.",
      img: blackJastImg
    },
    {
      id: "abu-abu",
      name: "Grey Wash",
      desc: "Denim abu-abu premium dengan aksen pudar yang elegan.",
      img: greyWashImg
    },
    {
      id: "biowash",
      name: "Biowash Blue",
      desc: "Denim biru premium dengan tekstur biowash pudar yang autentik.",
      img: biowashBlueImg
    },
    {
      id: "garmen",
      name: "Garmen Blue",
      desc: "Denim biru gelap premium dengan warna indigo dalam yang kaya dan otentik.",
      img: garmenBlueImg
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Logo Kokoroy" className="w-12 h-12 rounded-full object-cover shadow-sm" />
            <span className="font-display font-bold text-2xl tracking-tight text-primary">KOKOROY</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#koleksi" className="hover:text-primary transition-colors">Koleksi</a>
            <a href="#kualitas" className="hover:text-primary transition-colors">Kualitas</a>
            <a href="#ukuran" className="hover:text-primary transition-colors">Panduan Ukuran</a>
          </div>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-6 font-bold shadow-md hover:shadow-lg transition-all" size="lg">
            <a href={TOKOPEDIA_LINK} target="_blank" rel="noopener noreferrer">
              Beli Sekarang
            </a>
          </Button>
        </div>
      </nav>

      <main>
        {/* Section 1: Hero */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 md:px-6 container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-xl"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6 border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                Bandung Streetwear
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6 text-primary">
                Tampil Keren<br/>Gak Perlu<br/>Mahal.
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Celana jeans denim pria premium berkualitas tinggi dari jantung kota Bandung. Dibuat untuk kamu yang berani tampil beda dengan energi street fashion yang autentik.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-bold shadow-xl transition-all" size="lg">
                  <a href={TOKOPEDIA_LINK} target="_blank" rel="noopener noreferrer">
                    Beli di Tokopedia
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-8 py-6 text-lg font-bold border-2 border-primary/20 hover:bg-primary/5 transition-all" size="lg">
                  <a href="#koleksi">
                    Lihat Koleksi
                  </a>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/5] md:aspect-square w-full max-w-lg mx-auto"
            >
              <div className="absolute inset-0 bg-accent/20 rounded-[2rem] transform rotate-3 translate-x-4 translate-y-4"></div>
              <img 
                src={collectionImg} 
                alt="Koleksi celana jeans denim pria Kokoroy Bandung" 
                className="absolute inset-0 w-full h-full object-cover rounded-[2rem] shadow-2xl z-10"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl p-4 shadow-xl z-20 border border-border flex items-center gap-4">
                <img src={logoImg} alt="Mascot Kokoroy" className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-bold text-sm text-primary">Premium Denim</p>
                  <p className="text-xs text-muted-foreground">Original Bandung</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Vibe & Identity */}
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
                Lahir dari Jalanan Bandung, Dibuat untuk Indonesia.
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-10">
                Kokoroy bukan sekadar brand celana. Ini adalah representasi energi anak muda yang percaya diri. Maskot ayam kami yang memakai hoodie "K" melambangkan semangat youthful, playful, namun tetap serius dalam urusan kualitas.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 3: Collection Grid */}
        <section id="koleksi" className="py-24 px-4 md:px-6 container mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">4 Varian Ikonik</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Pilih warna yang paling mewakili karaktermu. Setiap potongan dirancang dengan detail sempurna.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {products.map((product) => (
              <motion.div key={product.id} variants={fadeInUp} className="group relative bg-card rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img 
                    src={product.img} 
                    alt={`Celana jeans denim pria Kokoroy warna ${product.name}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl mb-2 text-primary">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-2">{product.desc}</p>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl font-bold" variant="default">
                    <a href={TOKOPEDIA_LINK} target="_blank" rel="noopener noreferrer">
                      Beli Sekarang
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Section 4: Features */}
        <section id="kualitas" className="py-24 bg-muted/50 border-y border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
              >
                <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-xl">
                  <img 
                    src={gridCollectionImg} 
                    alt="Detail tekstur celana jeans denim Kokoroy" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-display font-bold text-primary mb-8">
                  Kualitas Premium, Harga Bersahabat
                </motion.h2>
                
                <div className="space-y-8">
                  {[
                    { title: "Material Berkualitas", desc: "Denim tebal namun tetap nyaman dan breathable saat dipakai seharian." },
                    { title: "Washing Autentik", desc: "Proses pencucian profesional menghasilkan tekstur dan warna pudar yang natural dan elegan." },
                    { title: "Fitting Sempurna", desc: "Pola jahitan yang disesuaikan dengan postur pria Indonesia, memberikan siluet yang proporsional." }
                  ].map((feature, idx) => (
                    <motion.div key={idx} variants={fadeInUp} className="flex gap-4">
                      <div className="w-12 h-12 shrink-0 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xl">
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div variants={fadeInUp} className="mt-10">
                  <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 py-6 text-lg font-bold shadow-lg" size="lg">
                    <a href={TOKOPEDIA_LINK} target="_blank" rel="noopener noreferrer">
                      Dapatkan Sekarang
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 5: Lookbook / Full Width Image */}
        <section className="py-20 px-4 md:px-6 container mx-auto">
           <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2rem] overflow-hidden aspect-[21/9] bg-primary flex items-center justify-center group"
          >
            <img 
              src={collectionImg} 
              alt="Model memakai celana jeans Kokoroy" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2s]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-primary/40"></div>
            <div className="relative z-10 text-center px-4">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Jadilah Pusat Perhatian</h2>
              <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary rounded-full px-8 py-6 font-bold text-lg transition-all" size="lg">
                <a href={TOKOPEDIA_LINK} target="_blank" rel="noopener noreferrer">
                  Beli Koleksi Lengkap
                </a>
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Section 6: Size Chart */}
        <section id="ukuran" className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">Panduan Ukuran</h2>
              <p className="text-lg text-muted-foreground">Pastikan kamu memilih ukuran yang paling pas untuk kenyamanan maksimal.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm"
            >
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-muted/50 border-b border-border">
                      <th className="p-4 font-bold text-primary">Ukuran</th>
                      <th className="p-4 font-bold text-primary">LP (Lebar Pinggang)</th>
                      <th className="p-4 font-bold text-primary">P (Panjang)</th>
                      <th className="p-4 font-bold text-primary">Berat Badan</th>
                      <th className="p-4 font-bold text-primary">Tinggi Badan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-bold text-primary">S</td>
                      <td className="p-4 text-muted-foreground">38 cm</td>
                      <td className="p-4 text-muted-foreground">99 cm</td>
                      <td className="p-4 text-muted-foreground">45-55 kg</td>
                      <td className="p-4 text-muted-foreground">160-168 cm</td>
                    </tr>
                    <tr className="hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-bold text-primary">M</td>
                      <td className="p-4 text-muted-foreground">39 cm</td>
                      <td className="p-4 text-muted-foreground">100 cm</td>
                      <td className="p-4 text-muted-foreground">55-65 kg</td>
                      <td className="p-4 text-muted-foreground">165-173 cm</td>
                    </tr>
                    <tr className="hover:bg-muted/30 transition-colors bg-accent/5">
                      <td className="p-4 font-bold text-primary flex items-center gap-2">
                        L <span className="text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded-full">Populer</span>
                      </td>
                      <td className="p-4 text-muted-foreground">41 cm</td>
                      <td className="p-4 text-muted-foreground">101 cm</td>
                      <td className="p-4 text-muted-foreground">65-75 kg</td>
                      <td className="p-4 text-muted-foreground">170-178 cm</td>
                    </tr>
                    <tr className="hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-bold text-primary">XL</td>
                      <td className="p-4 text-muted-foreground">43 cm</td>
                      <td className="p-4 text-muted-foreground">100 cm</td>
                      <td className="p-4 text-muted-foreground">75-85 kg</td>
                      <td className="p-4 text-muted-foreground">175-185 cm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground mb-4">Masih bingung menentukan ukuran?</p>
              <Button asChild variant="outline" className="rounded-full">
                 <a href={TOKOPEDIA_LINK} target="_blank" rel="noopener noreferrer">
                   Konsultasi via Tokopedia
                 </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Section 7: Final CTA */}
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="max-w-2xl mx-auto"
            >
              <img src={logoImg} alt="Kokoroy Mascot" className="w-24 h-24 rounded-full mx-auto mb-8 shadow-2xl border-4 border-primary-foreground/20" />
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Siap Tampil Beda?</h2>
              <p className="text-xl text-primary-foreground/80 mb-10">Pesan sekarang dan rasakan sendiri kualitas premium denim Kokoroy.</p>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-10 py-8 text-2xl font-bold shadow-2xl transform hover:scale-105 transition-all" size="lg">
                <a href={TOKOPEDIA_LINK} target="_blank" rel="noopener noreferrer">
                  Beli di Tokopedia
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="Logo Kokoroy" className="w-10 h-10 rounded-full grayscale opacity-70" />
              <span className="font-display font-bold text-xl text-muted-foreground">KOKOROY</span>
            </div>
            <div className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {new Date().getFullYear()} Kokoroy Bandung. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}