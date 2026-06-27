export const projects = [
  {
    slug: "glovetalk",
    route: "/projects/glovetalk",
    name: "GLOVETALK",
    teamName: "Kaizen",
    institute: "Mar Athanasius College of Engineering, Kothamangalam",
    teamLead: "Alex Thomas",
    teamMembers: ["Mathew Joseph", "Muhammed Shaheem", "Roshan Thankachan"],
    category: "ISL Translation / Multi-modal",
    video: "/video/Kaizen.webm",
    tagline:
      "Hybrid AI-powered Indian Sign Language translation combining wearable sensing, computer vision, and deep learning.",
    cardSummary:
      "A hybrid ISL system that combines smart gloves, pose extraction, transformer recognition, language refinement, and speech output.",
    cardFacts: ["INCLUDE dataset", "263 ISL glosses", "Smart gloves + vision"],
    overview: [
      "Communication barriers remain a significant challenge for the deaf and hard-of-hearing community, particularly due to the limited understanding of Indian Sign Language (ISL) among the general public. Existing sign language recognition systems often rely solely on either computer vision or wearable sensors, making them susceptible to occlusion, lighting variations, limited portability, or insufficient contextual understanding.",
      "GLOVETALK presents a hybrid, AI-powered sign language translation system that combines wearable sensing, computer vision, and deep learning to deliver accurate, real-time, and context-aware communication.",
      "To ensure the solution addresses genuine user needs, a clinical immersion session at the National Institute of Speech and Hearing (NISH), Thiruvananthapuram, was conducted prior to system development. Feedback from members of the deaf community directly influenced key design decisions, including lightweight wearable construction, protective 3D-printed enclosures, sentence-level language assistance, and improved usability, following a user-centered design methodology.",
      "By combining multi-modal sensing, transformer-based sign recognition, facial feature integration, LLM-powered language generation, and an end-to-end learning and deployment platform, GLOVETALK provides a scalable, accessible, and future-ready assistive technology.",
    ],
    features: [
      "Dual ESP32-based smart gloves with BNO086 9-DOF IMUs and flex sensors for hand orientation and finger articulation tracking",
      "Vision-based recognition pipeline using RTMLib for whole-body keypoint extraction",
      "Multi-Stream Pose Transformer (MSPT) for sign recognition",
      "LLM-assisted language refinement module converting predicted sign sequences into grammatically correct, context-aware English sentences",
      "Integrated Text-to-Speech (TTS) engine for natural verbal output",
      "Web dashboard with interactive ISL learning, orientation coaching, automated dataset collection, progress tracking, and gloss corpus exploration",
      "Facial feature integration for added context",
      "Designed from direct deaf-community feedback through the NISH clinical immersion",
    ],
    techStack: [
      {
        title: "Hardware",
        items: [
          "Dual ESP32-based smart gloves",
          "BNO086 9-DOF IMUs",
          "Flex sensors",
          "Protective 3D-printed enclosures",
        ],
      },
      {
        title: "Computer Vision",
        items: ["RTMLib for whole-body keypoint extraction"],
      },
      {
        title: "Model",
        items: ["Multi-Stream Pose Transformer (MSPT)"],
      },
      {
        title: "Language Layer",
        items: [
          "LLM-assisted language refinement",
          "Text-to-Speech (TTS) engine",
        ],
      },
      {
        title: "Preprocessing",
        items: [
          "Stream normalization",
          "Temporal sampling",
          "Horizontal flipping",
          "Temporal resampling",
          "Gaussian jitter",
          "Skeleton scaling",
        ],
      },
      {
        title: "Platform",
        items: [
          "Web dashboard for learning, coaching, dataset collection, progress tracking, and corpus exploration",
        ],
      },
    ],
    dataset: [
      "Dataset: INCLUDE dataset",
      "4,292 videos",
      "About 270,000 annotated frames",
      "263 ISL glosses",
      "Augmentation: horizontal flipping, temporal resampling, Gaussian jitter, skeleton scaling",
    ],
    applications: [
      "Educational institutions",
      "Healthcare facilities",
      "Public service centers",
      "Everyday communication",
      "Foundation for multilingual sign language recognition and edge AI applications",
    ],
  },
  {
    slug: "signvox",
    route: "/projects/signvox",
    name: "SignVox",
    teamName: "ZORA",
    institute: "Adi Shankara Institute of Engineering and Technology",
    teamLead: "Anugraha Siju",
    teamMembers: ["Basil Saji", "Abhinav Raj", "Albert M Paul"],
    category: "ASL Translation / Bidirectional",
    video: "/video/ZORA.webm",
    tagline:
      "A lightweight bidirectional sign language communication system - Sign-to-Sound and Sound-to-Sign.",
    cardSummary:
      "A practical ASL communication system for sign recognition, spoken output, and animated sign replies across multiple clients.",
    cardFacts: ["Bidirectional", "13 meeting phrases", "Web / Android / Windows"],
    overview: [
      "Communication barriers between hearing individuals and the Deaf and Hard-of-Hearing community continue to limit accessibility in education, workplaces, and virtual meetings. SignVox is a lightweight bidirectional sign language communication system designed to facilitate seamless interaction through both Sign-to-Sound and Sound-to-Sign translation. The system combines computer vision, deep learning, and cross-platform application development to provide an accessible and deployable solution.",
      "By integrating recognition and generation within a unified framework, SignVox demonstrates the feasibility of practical, real-time, bidirectional sign language communication for everyday interactions.",
    ],
    features: [
      "Bidirectional translation: Sign-to-Sound and Sound-to-Sign",
      "Static fingerspelling recognition via a Multilayer Perceptron (MLP)",
      "Dynamic sentence recognition via ST-GCN encoder, BiGRU phrase classifier, and BiGRU-GRU sequence decoder",
      "Custom fine-tuning dataset of 13 commonly used phrases for online meetings",
      "Sound-to-Sign prototype that converts spoken or typed English into animated ASL sequences",
      "About 30-sign vocabulary generating over 400 meaningful sentence combinations",
      "Cross-platform client for Web, Android, and Windows",
      "Lightweight server-side inference running on a consumer-grade laptop CPU",
    ],
    techStack: [
      {
        title: "Landmark Extraction",
        items: ["MediaPipe Holistic"],
      },
      {
        title: "Static Fingerspelling Model",
        items: [
          "Multilayer Perceptron (MLP)",
          "IEEE DataPort ASL Fingerspelling dataset",
        ],
      },
      {
        title: "Dynamic Sentence Recognition",
        items: [
          "Pretrained Spatio-Temporal Graph Convolutional Network (ST-GCN) encoder",
          "Bidirectional GRU (BiGRU) phrase classifier",
          "BiGRU-GRU sequence decoder",
        ],
      },
      {
        title: "Sound-to-Sign Generation",
        items: ["Rule-based ASL sentence ordering over an about 30-sign vocabulary"],
      },
      {
        title: "Client",
        items: ["Flutter for Web, Android, and Windows"],
      },
      {
        title: "Server",
        items: ["Lightweight inference server compatible with consumer-grade CPUs"],
      },
    ],
    dataset: [
      "IEEE DataPort ASL Fingerspelling dataset for static letters",
      "Custom dataset of 13 common online-meeting phrases for dynamic sentence fine-tuning",
    ],
  },
  {
    slug: "signify",
    route: "/projects/signify",
    name: "SIGNify",
    teamName: "INVICTI",
    institute: "MODEL ENGINEERING COLLEGE THRIKKAKARA",
    teamLead: "Francisa Thankachan",
    teamMembers: ["Annada S", "Jishnu Prashanth", "Jacob Saji"],
    category: "ASL Translation / Edge AI",
    video: "/video/Invicti.webm",
    tagline:
      "Real-time, low-power ASL translation engineered for edge computing.",
    cardSummary:
      "A low-power ASL translation engine that converts live webcam gestures into text and speech with sub-second latency.",
    cardFacts: [">97% accuracy", "Sub-second latency", "Jetson Nano 4GB"],
    overview: [
      "SIGNify is a real-time American Sign Language (ASL) translation system developed to bridge communication barriers for the deaf and hard-of-hearing community. Designed specifically for low-power edge computing environments, the system seamlessly translates live webcam gestures into readable text and synthesized speech with sub-second latency.",
      "By utilizing Google MediaPipe for robust skeletal feature extraction alongside strict translation-invariant mathematics, the model entirely bypasses the heavy computational overhead typically associated with traditional video-based Convolutional Neural Networks (CNNs). The engine is fully optimized for continuous CPU execution without needing external cloud processing, demonstrating that robust, offline, privacy-preserving assistive translation can be achieved efficiently on highly affordable, resource-constrained edge hardware.",
    ],
    features: [
      "Real-time webcam gesture translation to text and speech",
      "Sub-second latency",
      "Fully offline and privacy-preserving with no cloud dependency",
      "Optimized for continuous CPU execution",
      "Over 97% test accuracy across supported signs and letters",
      "Runs on highly affordable edge hardware, including NVIDIA Jetson Nano 4GB",
    ],
    techStack: [
      {
        title: "Feature Extraction",
        items: [
          "Google MediaPipe skeletal keypoints",
          "Translation-invariant wrist-relative 3D spatial coordinates",
        ],
      },
      {
        title: "Static Alphabet Recognition",
        items: ["Custom 4-layer Deep Neural Network"],
      },
      {
        title: "Dynamic Gesture Recognition",
        items: ["Ultra-lightweight Separable 1D-CNN over temporal windows"],
      },
      {
        title: "Deployment Hardware",
        items: ["NVIDIA Jetson Nano 4GB"],
      },
      {
        title: "Compute Strategy",
        items: [
          "No traditional video-based CNN",
          "Avoids heavy compute overhead",
          "CPU-based and cloud-free",
        ],
      },
    ],
    results: [
      "24 static letters plus a set of dynamic ASL words recognized",
      "Over 97% test accuracy",
      "Sub-second translation latency",
      "Fully CPU-based with no cloud processing required",
    ],
  },
  {
    slug: "signet-aid",
    route: "/projects/signet-aid",
    name: "Signet Aid",
    teamName: "EUPHORIA",
    institute: "Adi Shankara Institute of Engineering and Technology, Kalady",
    teamLead: "Nima Fathima",
    teamMembers: ["Jayalakshmy Jayakrishnan", "Roshan Robin", "Sakhil N Maju"],
    category: "ASL Translation / Gloss-Free SLT / Emotion-Aware",
    video: "/video/Euphoria.webm",
    tagline:
      "Real-time ASL-to-English translation with emotion- and grammar-aware speech synthesis.",
    cardSummary:
      "A gloss-free ASL-to-English translation pipeline with emotion-aware speech synthesis and cloud GPU streaming.",
    cardFacts: ["92.3% sentence-type accuracy", "How2Sign", "mBART-Large"],
    team: ["Nima Fathima", "Jayalakshmy Jayakrishnan", "Roshan Robin", "Sakhil N Maju"],
    overview: [
      "Over 70 million deaf and hard-of-hearing individuals worldwide rely on sign language as their primary means of communication. Despite its prevalence, automated sign language translation remains an open and technically challenging problem due to the spatial, temporal, and linguistic complexity of signed gestures.",
      "Signet Aid is a real-time American Sign Language (ASL) to English translation system. The modelling effort explored two deep learning paradigms: a Spatial-Temporal Graph Convolutional Network (ST-GCN) for skeleton-based gesture recognition, and a Gloss-Free Sign Language Translation (GFSL) system built on mBART, a large pre-trained multilingual sequence-to-sequence model. The final deployed architecture (v10) combines a lightweight keypoint projection head, a novel TemporalRefinement convolutional module, and a fine-tuned mBART-Large decoder, trained end-to-end on the How2Sign dataset using a two-phase curriculum strategy, served through a WebSocket-based streaming pipeline on GPU cloud infrastructure.",
      "The system is extended with a phone client that pairs the translation channel with an independent face, emotion, and grammar channel, so confirmed sentences are spoken back as emotionally- and grammatically-informed synthesized speech - preserving not just what was signed, but how it was meant.",
      "The architectural evolution from ST-GCN classification to GFSL sequence generation reflects the core insight that sign language translation is fundamentally a sequence modelling problem requiring open-vocabulary outputs, not a fixed-label recognition task.",
    ],
    features: [
      "Real-time, gloss-free ASL-to-English translation",
      "Two independently-reconnecting WebSocket channels for translation plus emotion and grammar",
      "Emotion-aware, grammar-aware speech synthesis on sentence confirmation",
      "Disambiguates grammatical facial markers from genuine emotional expression",
      "Beam-search sentence generation with repetition suppression",
      "Flush protocol for fast short-utterance inference",
      "Containerized GPU cloud deployment with automatic weight loading",
    ],
    pipeline:
      "Camera at 24fps -> MediaPipe Holistic -> Keypoint Buffer -> GFSL v10 (mBART) -> English Text -> Emotion Gateway -> Chatterbox TTS",
    techStack: [
      {
        title: "Model Approach 1 - ST-GCN",
        items: [
          "Skeleton-based action recognition",
          "Body represented as graph with 137 vertices and spatial plus temporal edges",
          "Limitation: outputs a fixed class label, not a token sequence, so it is not viable for continuous translation",
        ],
      },
      {
        title: "Model Approach 2 - GFSL v10",
        items: [
          "Bypasses gloss transcription",
          "Maps visual skeleton features directly to fluent English via mBART-Large",
          "mBART-Large uses 613M parameters and supports 25 languages",
        ],
      },
      {
        title: "GFSL Stages",
        items: [
          "Keypoint Projector: Linear(411->512), ReLU, Linear(512->1024)",
          "Temporal Refinement: Depthwise Conv1d kernel 5, GELU, Pointwise Conv1d, zero-init residual",
          "Sign Embedding: Linear(1024->1024), BatchNorm1d, ReLU, scale x32",
          "mBART Decoder with cross-attention and autoregressive beam search",
        ],
      },
      {
        title: "Inference Pipeline",
        items: [
          "Client streams JPEG frames at 24fps over WebSocket to RunPod GPU server",
          "Server-side MediaPipe Holistic extracts a 411-dim keypoint vector per frame",
          "Sliding buffer of 170 frames with stride 85 for 50% overlap",
          "Inference every about 3.5 seconds",
          "Beam search n=8, max 80 tokens, no-repeat 3-gram, length penalty 1.2",
        ],
      },
      {
        title: "Emotion and Grammar Module",
        items: [
          "Vision Producer using RetinaFace, HSEmotion, and MediaPipe face",
          "Audio Consumer using fusion and Chatterbox TTS",
          "Audio Player process",
          "Confound gate, fusion, and dampening logic to separate grammar from affect",
          "VAToChatterbox mapping converts valence and arousal into Chatterbox TTS controls",
        ],
      },
      {
        title: "Deployment",
        items: [
          "Docker container on RunPod GPU cloud",
          "FastAPI and Uvicorn WebSocket server",
          "PyTorch 2.2.2 with CUDA 11.8",
          "Automatic weight download from Kaggle on boot",
        ],
      },
    ],
    dataset: [
      "Dataset: How2Sign, about 31,000 sentence-level ASL video clips with English ground-truth translations",
      "Curriculum-filtered to 9,935 sentences of 3-20 words for training stability, about 80 training hours",
      "1,739 validation sentences, about 4 hours",
      "Two-phase training: Phase 1 adapter alignment with frozen decoder, epochs 158-183; Phase 2 decoder fine-tuning, epochs 184+",
      "GPU: NVIDIA RTX A6000 with 48GB VRAM",
      "AdamW optimizer with cosine annealing learning rate",
      "Best validation loss: 2.9914 at epoch 179",
      "Phase 2 showed overfitting on the curriculum subset and is flagged as future work",
    ],
    results: [
      "Sentence-type accuracy: 92.3%",
      "False-question rate: 0.0%",
      "Question recall: 83.3%",
      "Affect preservation: 100%",
      "Brow gate precision and recall: 100% / 100%",
      "Latency improved from 99.0ms to 67.7ms after unifying the face detection backend",
    ],
    tables: [
      {
        title: "Performance Benchmarks",
        columns: ["Metric", "Result"],
        rows: [
          ["Sentence-type accuracy", "92.3%"],
          ["False-question rate", "0.0%"],
          ["Question recall", "83.3%"],
          ["Affect preservation", "100%"],
          ["Brow gate precision / recall", "100% / 100%"],
          ["Emotion-pipeline latency", "99.0ms to 67.7ms, a 31.7% reduction"],
        ],
      },
      {
        title: "ST-GCN vs GFSL",
        columns: ["Capability", "ST-GCN", "GFSL v10"],
        rows: [
          ["Output type", "Fixed class label", "Sequence-to-sequence English output"],
          ["Vocabulary", "Closed label set", "Open vocabulary generation"],
          ["Continuous signing", "Limited fit", "Native continuous signing support"],
          ["Production fit", "Exploratory", "Production deployment"],
        ],
      },
    ],
    limitations: [
      "Emotion model (HSEmotion) trained on a non-signer corpus (AffectNet) and not yet validated on signer footage",
      "About 100-200ms timing skew between emotion and grammar inference channels",
      "Calibration assumes a neutral first second per session with no per-user expressiveness scaling",
      "Surprise-toned yes/no questions remain an unresolved edge case",
    ],
    futureWork: [
      "Expand curriculum training set, selective cross-attention fine-tuning, and full How2Sign test-set evaluation",
      "Map valence and arousal to real prosody through SSML",
      "Record and label additional ASL clips stressing trap cases",
      "Build a joint multimodal model for hands, face, and pose to translation plus affect and prosody",
      "Use joint latency budgeting with speculative synthesis ahead of confirmation",
      "Add streaming TTS synthesis for sub-second time-to-first-audio-chunk",
    ],
  },
  {
    slug: "signbridge",
    route: "/projects/signbridge",
    name: "SignBridge (Sign to Sound)",
    teamName: "Sapphire",
    institute: "Government Engineering College, Thrissur",
    teamLead: "Jan Zameera",
    teamMembers: ["Abhinav Bijoy", "Aneena S S", "M K Nandana"],
    category: "ISL Translation / Bidirectional / Web App",
    video: "/video/Saphire.webm",
    tagline:
      "A bidirectional Indian Sign Language web application - sign-to-speech and speech-to-sign, no special hardware required.",
    cardSummary:
      "A browser-based ISL platform for webcam fingerspelling recognition, speech output, and typed or spoken replies rendered as signs.",
    cardFacts: ["No special hardware", "Browser-based", "Live demo"],
    team: ["Sapphire - Abhinav Bijoy", "Aneena S S", "Jan Zameera", "M K Nandana"],
    links: [
      {
        label: "Live Demo",
        url: "https://isl-sign-to-sound-web-aajn1.streamlit.app/",
      },
    ],
    overview: [
      "Indian Sign Language (ISL) is the primary mode of communication for millions of individuals with hearing and speech impairments across India. Despite its significance, the lack of accessible real-time translation tools creates persistent barriers in everyday communication.",
      "Sign to Sound is an innovative web-based assistive communication platform developed to bridge the communication gap between the deaf and hard-of-hearing community and the general public using Indian Sign Language. The application leverages real-time hand gesture recognition powered by a deep neural network model to translate ISL finger-spelling into text and speech, while also supporting reverse communication by displaying corresponding ISL hand sign diagrams for typed text. This bidirectional design ensures seamless interaction between signers and non-signers without requiring any specialized hardware beyond a standard webcam.",
      "The system captures live video from the user's webcam, processes it through a trained neural network, and outputs recognized letters, words, and spoken audio in real time - entirely browser-based, with no installation required.",
    ],
    features: [
      "Real-time sign recognition with live webcam feed, hand-skeleton overlay, landmark tracking, and on-screen confidence scores",
      "Text construction with edit controls, including Backspace and Clear",
      "Text-to-Speech output through the browser Web Speech API",
      "Conversation history panel using a chat-style log",
      "Bidirectional reply mode where non-signing users can type or speak a reply and render each letter as an ISL hand-sign diagram card",
      "Experimental mood detection for contextual awareness",
    ],
    techStack: [
      {
        title: "Client",
        items: [
          "Client-side web application",
          "No server-side video processing",
          "Cross-platform by design",
        ],
      },
      {
        title: "Sign Recognition",
        items: [
          "Pretrained convolutional neural network classifying hand landmark coordinates",
          "Real-time hand-tracking library",
        ],
      },
      {
        title: "Speech Output",
        items: ["Web Speech API for text-to-speech"],
      },
      {
        title: "Reply Input",
        items: ["Web Speech Recognition API"],
      },
    ],
    applications: [
      "Healthcare",
      "Education",
      "Public services",
      "Everyday social interactions",
      "Independent communication without requiring an interpreter",
      "Either party can use their natural modality: signed, typed, or spoken",
    ],
    futureWork: [
      "Full ISL word-level gesture support beyond fingerspelling",
      "Multi-language speech output",
      "Mobile device optimization",
    ],
  },
];

export const getProjectByPath = (pathname) => {
  const normalizedPath = pathname.replace(/\/$/, "") || "/";
  return projects.find((project) => project.route === normalizedPath);
};

export const getProjectTeamLabel = (project) => {
  if (project.teamName) {
    return project.teamName;
  }

  if (Array.isArray(project.team) && project.team.length > 0) {
    return project.team.join(", ");
  }

  return "Team details not listed";
};
