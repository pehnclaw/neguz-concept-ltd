import os

markdown_content = """# Product Specification & Architecture Document: NEGUZ CONCEPT LTD
## Project: High-End Dual-Themed Interior Architecture & Fit-Out Platform
## Target Builder Environment: Antigravity Codebase Engine

---

## 1. Executive Summary & Brand Strategy
NEGUZ CONCEPT LTD is a registered premium interior design, finishing, and spatial fit-out firm operating out of Abuja, Nigeria (headquartered around Dutse Alhaji / Bwari Area, with client clusters across high-end real estate zones such as Maitama, Asokoro, Wuse II, and Gwarinpa). 

The digital platform must elevate the business from an artisanal Instagram-only presence to an elite architectural design studio. It must capture high-ticket corporate and residential client leads, justify premium contractual billing, and serve as an interactive visual showroom.

### 1.1 Brand Identity Assets & Color Palette
Extracted directly from corporate assets and the official logo badge (`image_af7617.png`):
* **Logo Geometry:** Perfect circular seal featuring an inner metallic radial track enclosing a custom interlocking, sharp-serif **"NG"** corporate monogram.
* **Primary Corporate Theme Colors:**
    * `Charcoal Dark Slate`: `#3A3F41` / `#222526`
    * `Polished Silver / Metallic Chrome`: `#B0B7BC` / `#E6E8EA`
    * `True Absolute Obsidian`: `#111213`
    * `Warm Luxury Accent (Gold/Bronze Core)`: `#C5A880` / `#D4AF37`
    * `Pure Studio Gallery Background`: `#FFFFFF` / `#F8F9FA`

---

## 2. Core Architectural Requirement: Dual-Theme Architecture
The system must support a site-wide state-managed theme toggle without causing layout shifts (CLS) or flash of unstyled content (FOUC).

### 2.1 Mode A: Dark Luxury Theme ("The Premium Night Showroom")
* **Aesthetic Target:** High-end boutique hotel suites, upscale ambient private cinemas, late-night high-end lifestyle curation.
* **Color Tokens:**
    * `bg-primary`: `#111213`
    * `bg-secondary`: `#1C1E1F`
    * `text-primary`: `#F8F9FA`
    * `text-secondary`: `#B0B7BC`
    * `accent-glow`: `#C5A880` (Muted Warm Gold)
    * `border-color`: `rgba(255, 255, 255, 0.08)`

### 2.2 Mode B: Minimal Editorial Theme ("The Architectural Studio Look")
* **Aesthetic Target:** Bright, daylight-flooded custom duplexes, architectural blueprints, scandinavian minimalism combined with rich materials.
* **Color Tokens:**
    * `bg-primary`: `#FDFDFD`
    * `bg-secondary`: `#F5F6F7`
    * `text-primary`: `#111213`
    * `text-secondary`: `#5E6568`
    * `accent-glow`: `#3A3F41` (Deep Slate Accent)
    * `border-color`: `rgba(0, 0, 0, 0.06)`

---

## 3. High-Converting Lead Flow & Action Architecture

### 3.1 Primary Action: Deep-Linked Pre-filled WhatsApp Routing
All global conversion nodes must point to WhatsApp Business API with programmatic parameters to pre-fill client contexts.

* **Endpoint Protocol:** `https://wa.me/2348115251461`
* **Dynamic Message Matrix:**
    * *Global Hero Button:* `?text=Hello%20Neguz%20Concept%20Ltd%2C%20I%20viewed%20your%20website%20and%20would%20like%20to%20consult%20on%20an%20interior%20finishing%20project%20in%20Abuja.`
    * *Cinema Portfolio Service:* `?text=Hello%20Neguz%20Concept%2C%20I%20am%20interested%20in%20setting%20up%20a%20Bespoke%20Home%20Cinema.%20Kindly%20provide%20pricing%20tiers.`
    * *TV Console Layout Section:* `?text=Hello%20Neguz%20Concept%2C%20I%20want%20to%20order%20a%20Custom%20Wall%20Panel%20%26%20TV%20Console%20design%20for%20my%20living%20room.`

### 3.2 Lead Filtering Form: Interactive Budget & Scope Assessment
An interactive custom-built form component to qualify premium inbound traffic before redirecting them directly to phone/chat consults.
* **Step 1 (Space Typology):** Living Room | Executive Master Bedroom | Private Cinema | Corporate Office Space | Full Luxury Duplex.
* **Step 2 (Fit-out Requirements):** Luxury POP Ceiling & Screeding | Fluted Wall Panels & TV Consoles | Soundproofing & Cinema Accents | Smart Ambient Lighting.
* **Step 3 (Property Location Context):** Maitama | Asokoro | Wuse II | Gwarinpa | Life Camp | Outside Abuja.
* **Step 4 (Project Phase):** Shell/Lintel Level | Plastered Blockwork | Renovation of Existing Finished Space.

---

## 4. Page Matrix & Content Schema

### 4.1 Page 1: The Master Showroom (Homepage)
* **Hero Section:** Full-bleed interactive background media container. Implements a high-end typography layout showcasing the company core purpose: *"Precision Concept to Execution"*.
* **The Corporate Blueprint Section:** Explicitly highlights corporate validation: **NEGUZ CONCEPT LTD** as an RC-certified entity, distinguishing the company from non-registered social media handles.
* **Bespoke Services Grid:** Three core high-margin pillars mapped cleanly:
    1.  *Advanced POP Ceiling Engineering & Flawless Screeding*
    2.  *Bespoke Joinery, Wall Panels & Premium Floating TV Consoles*
    3.  *Acoustic Isolation, Spatial Layouts & Private Cinema Integration*

### 4.2 Page 2: Case Studies Portfolio (`/portfolio`)
Translates raw Instagram highlights into high-end structural case studies. Every entry contains a **Before & After Interactive Split Slider Component**.

* **Case Study 1: The Banex Duplex Suite Project**
    * *Focus:* Intricate multi-tiered recessed LED POP ceilings and full-perimeter screeding.
* **Case Study 2: Adeyemi Law Office Fit-Out**
    * *Focus:* Executive minimalist design, acoustic isolation, and corporate structural woodwork.
* **Case Study 3: The Panel Masterclass Cinema**
    * *Focus:* Dark fluted wood paneling, velvet acoustic tracking, custom-milled floating media storage unit.

### 4.3 Page 3: Abuja Interior Market Intelligence Hub (SEO Blog Base)
A critical organic traffic funnel optimized strictly for localized high-intent keywords to capture real estate developers and homeowners within Abuja.

---

## 5. Hyper-Localized Abuja SEO Matrix

To capture premium, high-intent traffic directly via Google Search within the Federal Capital Territory, the following keyword cluster schema must be injected directly into meta tags, dynamic routing schemas, and header structures (`h1`, `h2`, `h3`):

| Target Keyword Phrase | Search Intent | Implementation Location | Target Group |
| :--- | :--- | :--- | :--- |
| `Best POP ceiling designs in Abuja` | Commercial Investigation | Blog Title, H1 Tag on Service Page | High-end homeowners remodeling |
| `Luxury interior finishing company Abuja` | High-Value Transactional | Homepage Title Tag, Meta Description | Corporate contractors, estate developers |
| `Custom TV console and wall paneling Gwarinpa` | Hyper-Local Transactional | Portfolio Page Metadata, Slug | Wealthy residential estate owners |
| `Cost of screeding and home cinema setup Nigeria` | Informational/Commercial | SEO Article, Pricing Guide | Private luxury buyers planning budget |
| `Interior decorators in Maitama and Asokoro` | Premium Location Specific | Landing Page Geo-Tag Paragraphs | Ultra-high-net-worth individuals |

---

## 6. Antigravity Developer Technical Specifications
Instructions configured specifically for the code compilation phase inside your Antigravity ecosystem: