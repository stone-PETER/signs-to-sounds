# Prompt: Build Individual Project Detail Pages

## Context
The main page already has project cards for 5 projects. Each card links/navigates to its own sub-page. Do **not** read any PDFs — all project content is already extracted and provided below. Use this content directly to populate each page.

## Task
Create 5 sub-pages, one per project, using the routes below. Each page must follow the **Shared Page Template** structure so all 5 pages look and feel consistent. Populate each section using the **Project Content** provided for that project. Where a project doesn't have data for a given section, omit that section gracefully (don't render an empty block).

## Routes
| # | Project (Display Name) | Route / Slug |
|---|---|---|
| 1 | GLOVETALK | `/projects/glovetalk` |
| 2 | SignVox | `/projects/signvox` |
| 3 | SIGNify | `/projects/signify` |
| 4 | Signet Aid | `/projects/signet-aid` |
| 5 | SignBridge (Sign to Sound) | `/projects/signbridge` |

Wire each existing main-page card to its matching route above (match by project name).

---

## Shared Page Template

Each project page should contain these sections, in this order. Use the `Project Content` block for that project to fill them in.

1. **Hero** — Project name, one-line tagline (derive a short tagline if not explicit), and a short category/badge (e.g. "ISL Translation", "ASL Translation", "Bidirectional Communication").
2. **Overview** — 2–4 paragraph abstract/summary describing the problem and what the system does.
3. **Key Features** — bullet list of standout capabilities.
4. **Tech Stack / Architecture** — hardware, models, datasets, frameworks, pipeline stages. Use sub-headings or a table where the content has structured pipeline/architecture data.
5. **Dataset & Training** (only if present) — dataset used, size, training strategy, results/metrics.
6. **Results / Performance** (only if present) — accuracy numbers, benchmarks, latency, comparison tables.
7. **Team** (only if present) — member names.
8. **Applications / Impact** (only if present) — real-world use cases.
9. **Future Work** (only if present) — planned improvements.
10. **Links** (only if present) — live demo / website links.

---

## Project Content

### 1. GLOVETALK — `/projects/glovetalk`

**Tagline:** Hybrid AI-powered Indian Sign Language translation combining wearable sensing, computer vision, and deep learning.
**Category badge:** ISL Translation · Multi-modal

**Overview:**
Communication barriers remain a significant challenge for the deaf and hard-of-hearing community, particularly due to the limited understanding of Indian Sign Language (ISL) among the general public. Existing sign language recognition systems often rely solely on either computer vision or wearable sensors, making them susceptible to occlusion, lighting variations, limited portability, or insufficient contextual understanding.

GLOVETALK presents a hybrid, AI-powered sign language translation system that combines wearable sensing, computer vision, and deep learning to deliver accurate, real-time, and context-aware communication.

To ensure the solution addresses genuine user needs, a clinical immersion session at the National Institute of Speech and Hearing (NISH), Thiruvananthapuram, was conducted prior to system development. Feedback from members of the deaf community directly influenced key design decisions, including lightweight wearable construction, protective 3D-printed enclosures, sentence-level language assistance, and improved usability, following a user-centered design methodology.

By combining multi-modal sensing, transformer-based sign recognition, facial feature integration, LLM-powered language generation, and an end-to-end learning and deployment platform, GLOVETALK provides a scalable, accessible, and future-ready assistive technology.

**Key Features:**
- Dual ESP32-based smart gloves with BNO086 9-DOF IMUs and flex sensors for hand orientation and finger articulation tracking
- Vision-based recognition pipeline using RTMLib for whole-body keypoint extraction
- Multi-Stream Pose Transformer (MSPT) for sign recognition
- LLM-assisted language refinement module converting predicted sign sequences into grammatically correct, context-aware English sentences
- Integrated Text-to-Speech (TTS) engine for natural verbal output
- Web dashboard with interactive ISL learning, orientation coaching, automated dataset collection, progress tracking, and gloss corpus exploration
- Facial feature integration for added context
- Designed from direct deaf-community feedback (NISH clinical immersion)

**Tech Stack / Architecture:**
- **Hardware:** Dual ESP32-based smart gloves, BNO086 9-DOF IMUs, flex sensors, protective 3D-printed enclosures
- **Computer Vision:** RTMLib for whole-body keypoint extraction
- **Model:** Multi-Stream Pose Transformer (MSPT)
- **Language Layer:** LLM-assisted language refinement, Text-to-Speech (TTS) engine
- **Preprocessing:** Stream normalization, temporal sampling, data augmentation (horizontal flipping, temporal resampling, Gaussian jitter, skeleton scaling)
- **Platform:** Web dashboard (learning, coaching, dataset collection, progress tracking, corpus exploration)

**Dataset & Training:**
- **Dataset:** INCLUDE dataset
- 4,292 videos
- ~270,000 annotated frames
- 263 ISL glosses
- Augmentation: horizontal flipping, temporal resampling, Gaussian jitter, skeleton scaling

**Applications / Impact:**
- Educational institutions
- Healthcare facilities
- Public service centers
- Everyday communication
- Foundation for multilingual sign language recognition and edge AI applications

---

### 2. SignVox — `/projects/signvox`

**Tagline:** A lightweight bidirectional sign language communication system — Sign-to-Sound and Sound-to-Sign.
**Category badge:** ASL Translation · Bidirectional

**Overview:**
Communication barriers between hearing individuals and the Deaf and Hard-of-Hearing community continue to limit accessibility in education, workplaces, and virtual meetings. SignVox is a lightweight bidirectional sign language communication system designed to facilitate seamless interaction through both Sign-to-Sound and Sound-to-Sign translation. The system combines computer vision, deep learning, and cross-platform application development to provide an accessible and deployable solution.

By integrating recognition and generation within a unified framework, SignVox demonstrates the feasibility of practical, real-time, bidirectional sign language communication for everyday interactions.

**Key Features:**
- Bidirectional translation: Sign-to-Sound and Sound-to-Sign
- Static fingerspelling recognition via a Multilayer Perceptron (MLP)
- Dynamic sentence recognition via ST-GCN encoder + BiGRU phrase classifier + BiGRU-GRU sequence decoder
- Custom fine-tuning dataset of 13 commonly used phrases for online meetings
- Sound-to-Sign prototype: converts spoken/typed English into animated ASL sequences
- ~30-sign vocabulary generating over 400 meaningful sentence combinations
- Cross-platform client (Web, Android, Windows)
- Lightweight server-side inference (runs on consumer-grade laptop CPU)

**Tech Stack / Architecture:**
- **Landmark Extraction:** MediaPipe Holistic
- **Static Fingerspelling Model:** Multilayer Perceptron (MLP), trained on IEEE DataPort ASL Fingerspelling dataset
- **Dynamic Sentence Recognition:** Pretrained Spatio-Temporal Graph Convolutional Network (ST-GCN) encoder + Bidirectional GRU (BiGRU) phrase classifier + BiGRU-GRU sequence decoder
- **Sound-to-Sign Generation:** Rule-based ASL sentence ordering over a ~30-sign vocabulary
- **Client:** Flutter (Web, Android, Windows)
- **Server:** Lightweight inference server, consumer-grade CPU compatible

**Dataset & Training:**
- IEEE DataPort ASL Fingerspelling dataset (static letters)
- Custom dataset of 13 common online-meeting phrases (dynamic sentence fine-tuning)

---

### 3. SIGNify — `/projects/signify`

**Tagline:** Real-time, low-power ASL translation engineered for edge computing.
**Category badge:** ASL Translation · Edge AI

**Overview:**
SIGNify is a real-time American Sign Language (ASL) translation system developed to bridge communication barriers for the deaf and hard-of-hearing community. Designed specifically for low-power edge computing environments, the system seamlessly translates live webcam gestures into readable text and synthesized speech with sub-second latency.

By utilizing Google MediaPipe for robust skeletal feature extraction alongside strict translation-invariant mathematics, the model entirely bypasses the heavy computational overhead typically associated with traditional video-based Convolutional Neural Networks (CNNs). The engine is fully optimized for continuous CPU execution without needing external cloud processing, demonstrating that robust, offline, privacy-preserving assistive translation can be achieved efficiently on highly affordable, resource-constrained edge hardware.

**Key Features:**
- Real-time webcam gesture translation to text and speech
- Sub-second latency
- Fully offline, privacy-preserving (no cloud dependency)
- Optimized for continuous CPU execution
- Over 97% test accuracy across supported signs/letters
- Runs on highly affordable edge hardware (NVIDIA Jetson Nano 4GB)

**Tech Stack / Architecture:**
- **Feature Extraction:** Google MediaPipe for skeletal keypoints, using translation-invariant mathematics (wrist-relative 3D spatial coordinates)
- **Static Alphabet Recognition:** Custom 4-layer Deep Neural Network
- **Dynamic Gesture Recognition:** Ultra-lightweight Separable 1D-CNN over temporal windows
- **Deployment Hardware:** NVIDIA Jetson Nano 4GB
- No traditional video-based CNN — avoids heavy compute overhead

**Results / Performance:**
- 24 static letters + a set of dynamic ASL words recognized
- Over 97% test accuracy
- Sub-second translation latency
- Fully CPU-based, no cloud processing required

---

### 4. Signet Aid — `/projects/signet-aid`

**Tagline:** Real-time ASL-to-English translation with emotion- and grammar-aware speech synthesis — preserving not just what was signed, but how it was meant.
**Category badge:** ASL Translation · Gloss-Free SLT · Emotion-Aware

**Team:** Nima Fathima, Jayalakshmy Jayakrishnan, Roshan Robin, Sakhil N Maju

**Overview:**
Over 70 million deaf and hard-of-hearing individuals worldwide rely on sign language as their primary means of communication. Despite its prevalence, automated sign language translation remains an open and technically challenging problem due to the spatial, temporal, and linguistic complexity of signed gestures.

Signet Aid is a real-time American Sign Language (ASL) to English translation system. The modelling effort explored two deep learning paradigms: a Spatial-Temporal Graph Convolutional Network (ST-GCN) for skeleton-based gesture recognition, and a Gloss-Free Sign Language Translation (GFSL) system built on mBART, a large pre-trained multilingual sequence-to-sequence model. The final deployed architecture (v10) combines a lightweight keypoint projection head, a novel TemporalRefinement convolutional module, and a fine-tuned mBART-Large decoder, trained end-to-end on the How2Sign dataset using a two-phase curriculum strategy, served through a WebSocket-based streaming pipeline on GPU cloud infrastructure.

The system is extended with a phone client that pairs the translation channel with an independent face/emotion/grammar channel, so confirmed sentences are spoken back as emotionally- and grammatically-informed synthesized speech — preserving not just what was signed, but how it was meant.

The architectural evolution from ST-GCN (classification) to GFSL (sequence generation) reflects the core insight that sign language translation is fundamentally a sequence modelling problem requiring open-vocabulary outputs, not a fixed-label recognition task.

**Key Features:**
- Real-time, gloss-free ASL-to-English translation
- Two independently-reconnecting WebSocket channels (translation + emotion/grammar) for graceful degradation
- Emotion-aware, grammar-aware speech synthesis on sentence confirmation
- Disambiguates grammatical facial markers (e.g. brow raise for questions) from genuine emotional expression
- Beam-search sentence generation with repetition suppression
- "Flush" protocol for fast short-utterance inference
- Containerized GPU cloud deployment with automatic weight loading

**Tech Stack / Architecture:**

*Pipeline overview:* Camera (24fps) → MediaPipe Holistic → Keypoint Buffer → GFSL v10 (mBART) → English Text → Emotion Gateway → Chatterbox TTS

**Model Approach 1 — ST-GCN (exploratory):**
- Skeleton-based action recognition; body as graph (137 vertices, spatial + temporal edges)
- Limitation: outputs a fixed class label, not a token sequence — not viable for continuous translation

**Model Approach 2 — GFSL (production, v10):**
- Bypasses gloss transcription; maps visual skeleton features directly to fluent English via mBART-Large (613M parameters, 25 languages)
- **Stage 1:** Keypoint Projector — Linear(411→512) → ReLU → Linear(512→1024)
- **Stage 2:** Temporal Refinement (v10 new) — Depthwise Conv1d (kernel 5) → GELU → Pointwise Conv1d + zero-init residual
- **Stage 3:** Sign Embedding — Linear(1024→1024) → BatchNorm1d → ReLU → scale ×32
- **Stage 4:** mBART Decoder — cross-attention, autoregressive beam search
- Only ~2.84M params (0.46% of 613M) trainable in Phase 1; mBART encoder/decoder frozen

**Inference Pipeline:**
- Client streams JPEG frames at 24fps over WebSocket to RunPod GPU server
- Server-side MediaPipe Holistic extracts 411-dim keypoint vector per frame
- Sliding buffer: 170 frames, stride 85 (50% overlap), inference every ~3.5s
- Beam search (n=8), max 80 tokens, no-repeat 3-gram, length penalty 1.2

**Emotion/Grammar Module:**
- Three cooperating OS processes: Vision Producer (RetinaFace + HSEmotion + MediaPipe face), Audio Consumer (fusion + Chatterbox TTS), Audio Player
- Disambiguates grammar vs. affect using a text channel, a "confound gate" (MediaPipe blendshapes), and fusion/dampening logic
- VAToChatterbox mapping converts valence/arousal into Chatterbox TTS exaggeration/cfg_weight controls

**Deployment:**
- Containerized (Docker), deployed on RunPod GPU cloud
- FastAPI + Uvicorn WebSocket server, PyTorch 2.2.2 + CUDA 11.8
- Automatic weight download from Kaggle on boot

**Dataset & Training:**
- **Dataset:** How2Sign — ~31,000 sentence-level ASL video clips with English ground-truth translations
- Curriculum-filtered to 9,935 sentences (3–20 words) for training stability (~80 training hours)
- 1,739 validation sentences (~4 hours)
- Two-phase training: Phase 1 (adapter alignment, frozen decoder, epochs 158–183) and Phase 2 (decoder fine-tuning, epochs 184+)
- GPU: NVIDIA RTX A6000 (48GB VRAM); AdamW optimizer; cosine annealing LR
- Best validation loss: 2.9914 at epoch 179 (current production checkpoint)
- Phase 2 showed overfitting on the curriculum subset; flagged as future work

**Results / Performance:**
- **Sentence-type accuracy:** 92.3%
- **False-question rate:** 0.0% (core safety metric — true statements never wrongly rendered as questions)
- **Question recall:** 83.3%
- **Affect preservation:** 100%
- **Brow gate precision/recall:** 100% / 100%
- **Latency improvement:** Full emotion-pipeline cycle reduced from 99.0ms to 67.7ms (−31.7%) after unifying the face detection backend
- ST-GCN vs GFSL comparison: GFSL supports open vocabulary, sequence-to-sequence output, native continuous signing, and production deployment; ST-GCN is limited to fixed-label classification

**Known Limitations:**
- Emotion model (HSEmotion) trained on a non-signer corpus (AffectNet); not yet validated on signer footage
- ~100–200ms timing skew between emotion and grammar inference channels
- Calibration assumes a neutral first second per session; no per-user expressiveness scaling
- Surprise-toned yes/no questions remain an unresolved edge case

**Future Work:**
- Expand curriculum training set; selective cross-attention fine-tuning; full How2Sign test-set evaluation
- Map valence/arousal to real prosody (pitch, rate, intensity, pausing) via SSML
- Record and label additional ASL clips stressing trap cases
- Joint multimodal model (hands + face + pose → translation and affect/prosody together)
- Joint latency budgeting using speculative synthesis ahead of confirmation
- Streaming TTS synthesis for sub-second time-to-first-audio-chunk

---

### 5. SignBridge (Sign to Sound) — `/projects/signbridge`

**Tagline:** A bidirectional Indian Sign Language web application — sign-to-speech and speech-to-sign, no special hardware required.
**Category badge:** ISL Translation · Bidirectional · Web App

**Team:** Sapphire — Abhinav Bijoy, Aneena S S, Jan Zameera, M K Nandana

**Live Demo:** https://isl-sign-to-sound-web-aajn1.streamlit.app/

**Overview:**
Indian Sign Language (ISL) is the primary mode of communication for millions of individuals with hearing and speech impairments across India. Despite its significance, the lack of accessible real-time translation tools creates persistent barriers in everyday communication.

Sign to Sound is an innovative web-based assistive communication platform developed to bridge the communication gap between the deaf and hard-of-hearing community and the general public using Indian Sign Language. The application leverages real-time hand gesture recognition powered by a deep neural network model to translate ISL finger-spelling into text and speech, while also supporting reverse communication by displaying corresponding ISL hand sign diagrams for typed text. This bidirectional design ensures seamless interaction between signers and non-signers without requiring any specialized hardware beyond a standard webcam.

The system captures live video from the user's webcam, processes it through a trained neural network, and outputs recognized letters, words, and spoken audio in real time — entirely browser-based, with no installation required.

**Key Features:**
- **Real-Time Sign Recognition:** Live webcam feed with hand-skeleton overlay; tracks landmarks to identify ISL finger-spelled letters with on-screen confidence scores
- **Text Construction with Edit Controls:** Recognized letters accumulate into words/sentences; Backspace and Clear controls for correction
- **Text-to-Speech Output:** "Speak" button converts accumulated text to audible speech via the browser's Web Speech API
- **Conversation History Panel:** Chat-style log — signer messages on the right, replies on the left
- **Bidirectional Reply Mode:** Non-signing users can type or speak a reply; the app renders each letter as an ISL hand-sign diagram card for the deaf user to read
- **Mood Detection (experimental):** Infers user's emotional state (e.g. Neutral, Happy) during the session for contextual awareness

**Tech Stack / Architecture:**
- **Client-side web application** — no server-side video processing, cross-platform by design
- **Sign Recognition:** Pretrained convolutional neural network (CNN) classifying hand landmark coordinates extracted via a real-time hand-tracking library
- **Text-to-Speech:** Web Speech API
- **Speech Recognition (reply input):** Web Speech Recognition API

**Applications / Impact:**
- Healthcare
- Education
- Public services
- Everyday social interactions
- Enables independent communication without requiring an interpreter; either party can use their natural modality (signed or typed/spoken)

**Future Work:**
- Full ISL word-level gesture support (beyond fingerspelling)
- Multi-language speech output
- Mobile device optimization

---

## Implementation Notes for Copilot
- Use the existing design system / component library already used for the main page cards (don't introduce a new visual style).
- Each project page should have a "Back to Projects" link at the top.
- If the main page cards already store project metadata (e.g. in a JSON/array), extend that data structure with the content above rather than hardcoding text inside page components, so content stays editable in one place.
- Tables in the Signet Aid content (e.g. ST-GCN vs GFSL comparison, performance benchmarks) should render as actual tables, not bullet lists, since they're comparative data.
- Do not fabricate any data not present above (e.g. don't invent screenshots, accuracy numbers, or team names for projects where none were given).