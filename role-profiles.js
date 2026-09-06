const roleProfiles = {
  ai: {
    cvHref: "assets/Le_Hoang_Gia_Vi_CV_AI_Engineer.pdf",
    projectPriorities: {
      "fmcg-multi-country-sales": 11,
      "fnb-supply-chain": 10,
      "xom-bank": 7,
      "smart-class": 3,
      clen: 5,
      dagpt: 2,
      "cacao-shield": 6,
      "fraud-detection": 4,
      "parking-slot": 8,
      "heart-disease": 9,
      "vnstock-ai": 1,
    },
    copy: {
      en: {
        meta: {
          title: "Le Hoang Gia Vi | AI Engineer",
          description: "Le Hoang Gia Vi — AI Engineer portfolio featuring machine learning, computer vision, data systems, and applied AI projects.",
        },
        hero: {
          eyebrow: "AI ENGINEERING · COMPUTER VISION · LLM SYSTEMS",
          titlePrimary: "Building practical AI systems",
          titleSecondary: "from model to deployment.",
          roleLabel: "Le Hoang Gia Vi — Fresher AI Engineer",
          description: "Final-year Data Science student and AI Engineer Intern with hands-on work in <strong>computer vision, machine learning, LLM/RAG and cloud AI</strong>. I build clear, useful AI applications from models, data and tests.",
          primaryAction: "Explore AI Projects",
          status: "Open to Fresher AI Engineer opportunities",
          technologies: [
            ["simple-icons:python", "Python"],
            ["simple-icons:pytorch", "PyTorch"],
            ["simple-icons:tensorflow", "TensorFlow"],
            ["lucide:scan", "YOLOX"],
            ["lucide:network", "LangChain"],
            ["simple-icons:amazonaws", "AWS"],
          ],
        },
        about: {
          heading: ["From AI experiments to", "useful systems."],
          paragraphs: [
            "I am a final-year <strong>Data Science</strong> student with hands-on experience in computer vision, machine learning, LLM-based applications and cloud AI deployment. My work covers model training, evaluation, real-time inference, retrieval systems and end-to-end AI pipelines.",
            "I care about AI systems that are accurate in tests and also simple to reproduce, efficient to run and useful in real applications.",
          ],
          points: [
            ["Machine learning & AI engineering", "Modeling, evaluation and delivery for reliable AI systems."],
            ["Computer vision & retrieval", "YOLO, deep learning, RAG and LLM-based data applications."],
            ["Cloud & data delivery", "AWS services, data pipelines and AI workflows ready for real use."],
          ],
        },
        expertise: {
          kicker: "CORE EXPERTISE",
          heading: ["Skills for building", "practical AI systems."],
          description: "I focus on model development, computer vision, retrieval-based applications and clean engineering work that turns experiments into usable systems.",
          cards: [
            ["Machine Learning & Deep Learning", "Train, evaluate and improve ML and deep learning models for classification, forecasting and imbalanced data.", ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost"]],
            ["Computer Vision", "Build image and real-time vision pipelines for detection, recognition, preprocessing and faster inference.", ["YOLO", "YOLOX", "OpenCV", "CNN-Transformer"]],
            ["LLM & AI Applications", "Build retrieval-based AI apps that connect data pipelines, embeddings, LLMs and easy-to-use interfaces.", ["RAG", "LangChain", "FAISS / Chroma", "Streamlit"]],
          ],
        },
        projects: {
          kicker: "FEATURED AI SYSTEMS",
          heading: ["Selected work showing how I", "build AI systems."],
          title: "Selected AI systems",
          subtitle: "The first three projects are the strongest examples from my CV. Use the arrows to explore more AI, data and research repositories.",
          descriptions: {
            "vnstock-ai": "Implemented an LLM/RAG workflow for VN30 analysis, wiring financial data, news and reports into retrieval-based responses for repeatable stock research.",
            dagpt: "Built a Streamlit LLM data assistant that connects CSV ingestion, natural-language querying and interactive chart outputs in one analysis workflow.",
            "smart-class": "Built a real-time computer-vision pipeline for classroom monitoring, reaching 90% emotion-classification and 95% identity-recognition accuracy on the project dataset.",
            "fraud-detection": "Engineered an imbalanced-data modeling pipeline with Bi-LSTM and SMOTE-ENN, reaching AUC 0.990 and Recall 0.953 on card-transaction data.",
          },
        },
        contact: {
          heading: ["Let's build useful", "AI solutions."],
          description: "I am currently seeking an AI Engineer role where I can contribute to machine learning, computer vision, retrieval and cloud AI solutions.",
        },
        footer: {
          description: "Building practical AI systems with clear research and engineering thinking.",
          status: "Available for AI Engineer opportunities",
        },
      },
      vi: {
        meta: {
          title: "Le Hoang Gia Vi | Kỹ sư AI",
          description: "Portfolio Kỹ sư AI của Le Hoang Gia Vi với các dự án học máy, thị giác máy tính, hệ thống dữ liệu và AI ứng dụng.",
        },
        hero: {
          eyebrow: "KỸ THUẬT AI · THỊ GIÁC MÁY TÍNH · HỆ THỐNG LLM",
          titlePrimary: "Xây dựng hệ thống AI thực tiễn",
          titleSecondary: "từ mô hình đến triển khai.",
          roleLabel: "Le Hoang Gia Vi — Kỹ sư AI Fresher",
          description: "Sinh viên năm cuối ngành Khoa học Dữ liệu, đồng thời là thực tập sinh Kỹ sư AI với kinh nghiệm thực tế về <strong>thị giác máy tính, học máy, LLM/RAG và AI trên nền tảng đám mây</strong>. Tôi xây dựng ứng dụng AI rõ ràng, hữu ích từ mô hình, dữ liệu và kiểm thử.",
          primaryAction: "Khám phá dự án AI",
          status: "Sẵn sàng cho các vị trí Kỹ sư AI Fresher",
          technologies: [
            ["simple-icons:python", "Python"],
            ["simple-icons:pytorch", "PyTorch"],
            ["simple-icons:tensorflow", "TensorFlow"],
            ["lucide:scan", "YOLOX"],
            ["lucide:network", "LangChain"],
            ["simple-icons:amazonaws", "AWS"],
          ],
        },
        about: {
          heading: ["Từ thử nghiệm AI đến", "hệ thống hữu ích."],
          paragraphs: [
            "Tôi là sinh viên năm cuối ngành <strong>Khoa học Dữ liệu</strong>, có kinh nghiệm thực hành về thị giác máy tính, học máy, ứng dụng dựa trên LLM và triển khai AI trên đám mây. Công việc của tôi gồm huấn luyện, đánh giá mô hình, suy luận thời gian thực, hệ thống truy xuất và pipeline AI đầu-cuối.",
            "Tôi quan tâm đến các hệ thống AI chính xác khi kiểm thử, dễ tái lập, chạy hiệu quả và hữu ích trong ứng dụng thực tế.",
          ],
          points: [
            ["Học máy & kỹ thuật AI", "Xây dựng, đánh giá và triển khai các hệ thống AI đáng tin cậy."],
            ["Thị giác máy tính & truy xuất", "YOLO, học sâu, RAG và ứng dụng dữ liệu dựa trên LLM."],
            ["Đám mây & phân phối dữ liệu", "Dịch vụ AWS, pipeline dữ liệu và quy trình AI sẵn sàng cho sử dụng thực tế."],
          ],
        },
        expertise: {
          kicker: "NĂNG LỰC CỐT LÕI",
          heading: ["Kỹ năng xây dựng", "hệ thống AI thực tiễn."],
          description: "Tôi tập trung vào phát triển mô hình, thị giác máy tính, ứng dụng dựa trên truy xuất và cách làm kỹ thuật rõ ràng để chuyển thử nghiệm thành hệ thống hữu ích.",
          cards: [
            ["Học máy & học sâu", "Huấn luyện, đánh giá và cải thiện mô hình ML/học sâu cho bài toán phân loại, dự báo và dữ liệu mất cân bằng.", ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost"]],
            ["Thị giác máy tính", "Xây dựng pipeline thị giác từ ảnh và thời gian thực cho phát hiện, nhận diện, tiền xử lý và suy luận nhanh hơn.", ["YOLO", "YOLOX", "OpenCV", "CNN-Transformer"]],
            ["LLM & ứng dụng AI", "Xây dựng ứng dụng AI dựa trên truy xuất, kết nối pipeline dữ liệu, embedding, LLM và giao diện dễ dùng.", ["RAG", "LangChain", "FAISS / Chroma", "Streamlit"]],
          ],
        },
        projects: {
          kicker: "HỆ THỐNG AI TIÊU BIỂU",
          heading: ["Một số dự án cho thấy cách tôi", "xây dựng hệ thống AI."],
          title: "Hệ thống AI tiêu biểu",
          subtitle: "Ba dự án đầu là ví dụ nổi bật nhất từ CV của tôi. Dùng mũi tên để xem thêm các kho mã nguồn AI, dữ liệu và nghiên cứu.",
          descriptions: {
            "vnstock-ai": "Triển khai workflow LLM/RAG cho phân tích VN30, kết nối dữ liệu tài chính, tin tức và báo cáo vào phản hồi dựa trên truy xuất.",
            dagpt: "Xây dựng trợ lý dữ liệu LLM bằng Streamlit, kết nối nhập CSV, truy vấn ngôn ngữ tự nhiên và biểu đồ tương tác trong một luồng phân tích.",
            "smart-class": "Xây dựng pipeline thị giác máy tính thời gian thực cho giám sát lớp học, đạt 90% phân loại cảm xúc và 95% nhận diện danh tính trên bộ dữ liệu dự án.",
            "fraud-detection": "Thiết kế pipeline mô hình hóa dữ liệu mất cân bằng với Bi-LSTM và SMOTE-ENN, đạt AUC 0.990 và Recall 0.953 trên dữ liệu giao dịch thẻ.",
          },
        },
        contact: {
          heading: ["Hãy cùng xây dựng", "giải pháp AI hữu ích."],
          description: "Tôi hiện tìm kiếm vị trí Kỹ sư AI, nơi tôi có thể đóng góp vào các giải pháp học máy, thị giác máy tính, truy xuất và AI đám mây.",
        },
        footer: {
          description: "Xây dựng hệ thống AI thực tiễn với tư duy nghiên cứu và kỹ thuật rõ ràng.",
          status: "Sẵn sàng cho các cơ hội Kỹ sư AI",
        },
      },
    },
  },
  ds: {
    cvHref: "assets/Le_Hoang_Gia_Vi_CV_Data_Scientist.pdf",
    projectPriorities: {
      "fmcg-multi-country-sales": 11,
      "fnb-supply-chain": 3,
      "xom-bank": 2,
      "smart-class": 5,
      clen: 8,
      dagpt: 6,
      "cacao-shield": 9,
      "fraud-detection": 1,
      "parking-slot": 10,
      "heart-disease": 4,
      "vnstock-ai": 7,
    },
    copy: {
      en: {
        meta: {
          title: "Le Hoang Gia Vi | Data Scientist",
          description: "Le Hoang Gia Vi — Data Scientist portfolio with applied machine learning, experimentation, analytics and data products.",
        },
        hero: {
          eyebrow: "DATA SCIENCE · MACHINE LEARNING · EXPERIMENTATION",
          titlePrimary: "Turning data into",
          titleSecondary: "validated decisions.",
          roleLabel: "Le Hoang Gia Vi — Fresher Data Scientist",
          description: "Final-year Data Science student with applied work in <strong>predictive modeling, imbalanced data, customer segmentation and model evaluation</strong>. I turn data questions into reproducible analyses and useful ML systems.",
          primaryAction: "Explore Data Science Work",
          status: "Open to Fresher Data Scientist opportunities",
          technologies: [
            ["simple-icons:python", "Python"],
            ["simple-icons:scikitlearn", "Scikit-learn"],
            ["simple-icons:pandas", "Pandas"],
            ["simple-icons:postgresql", "SQL"],
            ["lucide:chart-no-axes-combined", "XGBoost"],
            ["simple-icons:powerbi", "Power BI"],
          ],
        },
        about: {
          heading: ["From data questions to", "measurable models."],
          paragraphs: [
            "I am a final-year <strong>Data Science</strong> student with hands-on work in machine learning, model evaluation, imbalanced classification and customer segmentation. My projects connect data preparation, experimentation and clearly reported results.",
            "I value analytical work that is reproducible, grounded in the data and useful for a real decision or workflow.",
          ],
          points: [
            ["Modeling & evaluation", "Feature preparation, robust evaluation and measurable ML outcomes."],
            ["Analytics & segmentation", "SQL-based analysis, customer behavior exploration and K-Means segmentation."],
            ["Applied data systems", "Pipelines that carry data from exploration to a usable model or product."],
          ],
        },
        expertise: {
          kicker: "DATA SCIENCE FOCUS",
          heading: ["Skills for", "evidence-led modeling."],
          description: "I combine data preparation, machine learning and analytical communication to make model results dependable and useful.",
          cards: [
            ["Machine Learning & Experimentation", "Develop and evaluate models for classification, forecasting and highly imbalanced data.", ["Scikit-learn", "XGBoost", "LightGBM", "PyTorch"]],
            ["Data & Feature Engineering", "Prepare and query structured data with Python, SQL, Pandas and NumPy for dependable analysis.", ["Python", "SQL", "Pandas", "NumPy"]],
            ["Analytics & Segmentation", "Explore behavior, segment customer profiles and present findings through clear data products.", ["K-Means", "Power BI", "SQL Server", "Streamlit"]],
          ],
        },
        projects: {
          kicker: "FEATURED DATA SCIENCE WORK",
          heading: ["Selected work in", "modeling and analytics."],
          title: "Selected data science work",
          subtitle: "Projects are ordered around the strongest evidence for modeling, evaluation, analytical workflows and data products.",
          descriptions: {
            "fraud-detection": "Modeled highly imbalanced card-transaction data with Bi-LSTM and SMOTE-ENN, reaching AUC 0.990 and Recall 0.953 after imbalance handling.",
            "xom-bank": "Prepared 157K+ banking transactions and 2K+ customer profiles, passed 19/19 quality checks and applied K-Means for customer segmentation.",
            dagpt: "Built a Streamlit data assistant for exploratory analysis, turning uploaded CSVs and natural-language questions into repeatable analyses and charts.",
            "smart-class": "Evaluated emotion-classification and identity-recognition models on the project dataset, reaching 90% and 95% accuracy for classroom-monitoring use.",
          },
        },
        contact: {
          heading: ["Let's turn data into", "useful decisions."],
          description: "I am currently seeking a Data Scientist role where I can contribute to modeling, experiments, analytical products and reliable ML workflows.",
        },
        footer: {
          description: "Turning data questions into reproducible analysis and useful machine-learning systems.",
          status: "Available for Data Scientist opportunities",
        },
      },
      vi: {
        meta: {
          title: "Le Hoang Gia Vi | Nhà khoa học dữ liệu",
          description: "Portfolio Nhà khoa học dữ liệu của Le Hoang Gia Vi với học máy ứng dụng, thử nghiệm, phân tích và sản phẩm dữ liệu.",
        },
        hero: {
          eyebrow: "KHOA HỌC DỮ LIỆU · HỌC MÁY · THỬ NGHIỆM",
          titlePrimary: "Biến dữ liệu thành",
          titleSecondary: "quyết định đã kiểm chứng.",
          roleLabel: "Le Hoang Gia Vi — Data Scientist Fresher",
          description: "Sinh viên năm cuối ngành Khoa học Dữ liệu với kinh nghiệm về <strong>mô hình dự báo, dữ liệu mất cân bằng, phân khúc khách hàng và đánh giá mô hình</strong>. Tôi chuyển câu hỏi dữ liệu thành phân tích có thể tái lập và hệ thống ML hữu ích.",
          primaryAction: "Khám phá dự án Khoa học Dữ liệu",
          status: "Sẵn sàng cho các vị trí Data Scientist Fresher",
          technologies: [
            ["simple-icons:python", "Python"],
            ["simple-icons:scikitlearn", "Scikit-learn"],
            ["simple-icons:pandas", "Pandas"],
            ["simple-icons:postgresql", "SQL"],
            ["lucide:chart-no-axes-combined", "XGBoost"],
            ["simple-icons:powerbi", "Power BI"],
          ],
        },
        about: {
          heading: ["Từ câu hỏi dữ liệu đến", "mô hình có thể đo lường."],
          paragraphs: [
            "Tôi là sinh viên năm cuối ngành <strong>Khoa học Dữ liệu</strong>, có kinh nghiệm thực hành về học máy, đánh giá mô hình, phân loại dữ liệu mất cân bằng và phân khúc khách hàng. Các dự án của tôi kết nối chuẩn bị dữ liệu, thử nghiệm và báo cáo kết quả rõ ràng.",
            "Tôi coi trọng công việc phân tích có thể tái lập, bám sát dữ liệu và hữu ích cho một quyết định hoặc quy trình thực tế.",
          ],
          points: [
            ["Mô hình & đánh giá", "Chuẩn bị đặc trưng, đánh giá vững chắc và kết quả ML có thể đo lường."],
            ["Phân tích & phân khúc", "Phân tích với SQL, khám phá hành vi khách hàng và phân khúc K-Means."],
            ["Hệ thống dữ liệu ứng dụng", "Pipeline đưa dữ liệu từ khám phá đến mô hình hoặc sản phẩm có thể sử dụng."],
          ],
        },
        expertise: {
          kicker: "TRỌNG TÂM KHOA HỌC DỮ LIỆU",
          heading: ["Kỹ năng cho", "mô hình dựa trên bằng chứng."],
          description: "Tôi kết hợp chuẩn bị dữ liệu, học máy và truyền đạt phân tích để biến kết quả mô hình thành thông tin đáng tin cậy, hữu ích.",
          cards: [
            ["Học máy & thử nghiệm", "Phát triển và đánh giá mô hình cho bài toán phân loại, dự báo và dữ liệu mất cân bằng cao.", ["Scikit-learn", "XGBoost", "LightGBM", "PyTorch"]],
            ["Dữ liệu & kỹ thuật đặc trưng", "Chuẩn bị và truy vấn dữ liệu cấu trúc với Python, SQL, Pandas và NumPy cho phân tích đáng tin cậy.", ["Python", "SQL", "Pandas", "NumPy"]],
            ["Phân tích & phân khúc", "Khám phá hành vi, phân khúc hồ sơ khách hàng và trình bày phát hiện qua sản phẩm dữ liệu rõ ràng.", ["K-Means", "Power BI", "SQL Server", "Streamlit"]],
          ],
        },
        projects: {
          kicker: "DỰ ÁN KHOA HỌC DỮ LIỆU TIÊU BIỂU",
          heading: ["Một số dự án về", "mô hình và phân tích."],
          title: "Dự án Khoa học Dữ liệu tiêu biểu",
          subtitle: "Dự án được sắp theo bằng chứng mạnh nhất về mô hình hóa, đánh giá, quy trình phân tích và sản phẩm dữ liệu.",
          descriptions: {
            "fraud-detection": "Mô hình hóa dữ liệu giao dịch thẻ mất cân bằng cao với Bi-LSTM và SMOTE-ENN, đạt AUC 0.990 và Recall 0.953 sau xử lý mất cân bằng.",
            "xom-bank": "Chuẩn bị hơn 157 nghìn giao dịch ngân hàng và hơn 2 nghìn hồ sơ khách hàng, vượt 19/19 kiểm tra chất lượng và áp dụng K-Means để phân khúc khách hàng.",
            dagpt: "Xây dựng trợ lý dữ liệu bằng Streamlit cho phân tích khám phá, chuyển CSV tải lên và câu hỏi ngôn ngữ tự nhiên thành phân tích và biểu đồ có thể lặp lại.",
            "smart-class": "Đánh giá mô hình phân loại cảm xúc và nhận diện danh tính trên bộ dữ liệu dự án, đạt 90% và 95% độ chính xác cho bài toán giám sát lớp học.",
          },
        },
        contact: {
          heading: ["Hãy biến dữ liệu thành", "quyết định hữu ích."],
          description: "Tôi hiện tìm kiếm vị trí Data Scientist để đóng góp vào mô hình hóa, thử nghiệm, sản phẩm phân tích và quy trình ML đáng tin cậy.",
        },
        footer: {
          description: "Biến câu hỏi dữ liệu thành phân tích có thể tái lập và hệ thống học máy hữu ích.",
          status: "Sẵn sàng cho các cơ hội Data Scientist",
        },
      },
    },
  },
  da: {
    cvHref: "assets/Le_Hoang_Gia_Vi_CV_Data_Analyst.pdf",
    projectPriorities: {
      "fmcg-multi-country-sales": 1,
      "fnb-supply-chain": 2,
      "xom-bank": 3,
      "smart-class": 8,
      clen: 10,
      dagpt: 4,
      "cacao-shield": 11,
      "fraud-detection": 5,
      "parking-slot": 9,
      "heart-disease": 6,
      "vnstock-ai": 7,
    },
    copy: {
      en: {
        meta: {
          title: "Le Hoang Gia Vi | Data Analyst",
          description: "Le Hoang Gia Vi — Data Analyst portfolio with SQL analytics, data warehousing, Power BI and decision-support projects.",
        },
        hero: {
          eyebrow: "DATA ANALYTICS · SQL · BUSINESS INTELLIGENCE",
          titlePrimary: "Turning business data into",
          titleSecondary: "clearer decisions.",
          roleLabel: "Le Hoang Gia Vi — Fresher Data Analyst",
          description: "Final-year Data Science student with applied work in <strong>SQL analysis, data warehousing, Power BI and customer segmentation</strong>. I make complex data easier to trust, explore and use in decision-making.",
          primaryAction: "Explore Analytics Work",
          status: "Open to Fresher Data Analyst opportunities",
          technologies: [
            ["simple-icons:postgresql", "SQL"],
            ["simple-icons:python", "Python"],
            ["simple-icons:powerbi", "Power BI"],
            ["lucide:database", "SQL Server"],
            ["simple-icons:pandas", "Pandas"],
            ["lucide:pie-chart", "K-Means"],
          ],
        },
        about: {
          heading: ["From business data to", "clearer decisions."],
          paragraphs: [
            "I am a final-year <strong>Data Science</strong> student with hands-on work in SQL analysis, data warehousing, Power BI and customer segmentation. My work connects quality-checked data, analysis and business-facing outputs.",
            "I enjoy making data easier to understand: define the question, validate the numbers and communicate the insight clearly.",
          ],
          points: [
            ["SQL & analytical foundations", "Query, validate and explore structured data for dependable answers."],
            ["Data warehousing & BI", "Star-schema data warehouse work and Power BI reporting for business-facing analysis."],
            ["Decision support", "Customer segmentation and clear data stories that connect evidence to action."],
          ],
        },
        expertise: {
          kicker: "ANALYTICS FOCUS",
          heading: ["Skills for", "trusted data decisions."],
          description: "I use SQL, data modeling, BI and analytical methods to turn structured data into clear, decision-ready information.",
          cards: [
            ["SQL & Data Analysis", "Explore, validate and analyze structured data with SQL, Python, Pandas and NumPy.", ["SQL", "Python", "Pandas", "NumPy"]],
            ["Data Warehousing & BI", "Build dependable analysis layers with SQL Server, star schemas, DAX and Power BI.", ["SQL Server", "Power BI", "Star Schema", "DAX"]],
            ["Customer & Decision Analytics", "Segment customer behavior and communicate patterns through focused dashboards and analysis.", ["K-Means", "Segmentation", "Streamlit", "R"]],
          ],
        },
        projects: {
          kicker: "FEATURED ANALYTICS WORK",
          heading: ["Selected work in", "data and decision support."],
          title: "Selected analytics work",
          subtitle: "Projects are ordered around the strongest evidence for SQL analysis, data quality, BI and decision-support workflows.",
          descriptions: {
            "fmcg-multi-country-sales": "Analyzed 1.05M FMCG sales records across six countries to support planning priorities; the top 20% of SKUs generated 50.04% of net sales, with SQL Server and Power BI reconciled as a planning guardrail.",
            "fnb-supply-chain": "Built a Power BI dashboard for supply-chain monitoring; validated 11 DAX KPIs including orders, gross margin and OTIF after EDA, data-quality checks and Power Query cleaning.",
            "xom-bank": "Analyzed 157K+ banking transactions in SQL Server/Power BI, passed 19/19 data-quality checks and segmented 2K+ customer profiles for decision support.",
            dagpt: "Delivered a self-service data assistant that turns uploaded CSVs and natural-language questions into analyses and interactive charts for faster exploration.",
          },
        },
        contact: {
          heading: ["Let's make data", "easier to use."],
          description: "I am currently seeking a Data Analyst role where I can contribute to SQL analysis, data quality, BI reporting and decision support.",
        },
        footer: {
          description: "Making structured data easier to trust, explore and use in real decisions.",
          status: "Available for Data Analyst opportunities",
        },
      },
      vi: {
        meta: {
          title: "Le Hoang Gia Vi | Chuyên viên phân tích dữ liệu",
          description: "Portfolio Chuyên viên phân tích dữ liệu của Le Hoang Gia Vi với phân tích SQL, kho dữ liệu, Power BI và các dự án hỗ trợ quyết định.",
        },
        hero: {
          eyebrow: "PHÂN TÍCH DỮ LIỆU · SQL · BUSINESS INTELLIGENCE",
          titlePrimary: "Biến dữ liệu kinh doanh thành",
          titleSecondary: "quyết định rõ ràng hơn.",
          roleLabel: "Le Hoang Gia Vi — Data Analyst Fresher",
          description: "Sinh viên năm cuối ngành Khoa học Dữ liệu với kinh nghiệm về <strong>phân tích SQL, kho dữ liệu, Power BI và phân khúc khách hàng</strong>. Tôi giúp dữ liệu phức tạp trở nên đáng tin, dễ khám phá và hữu ích hơn cho quyết định.",
          primaryAction: "Khám phá dự án Phân tích Dữ liệu",
          status: "Sẵn sàng cho các vị trí Data Analyst Fresher",
          technologies: [
            ["simple-icons:postgresql", "SQL"],
            ["simple-icons:python", "Python"],
            ["simple-icons:powerbi", "Power BI"],
            ["lucide:database", "SQL Server"],
            ["simple-icons:pandas", "Pandas"],
            ["lucide:pie-chart", "K-Means"],
          ],
        },
        about: {
          heading: ["Từ dữ liệu kinh doanh đến", "quyết định rõ ràng hơn."],
          paragraphs: [
            "Tôi là sinh viên năm cuối ngành <strong>Khoa học Dữ liệu</strong>, có kinh nghiệm thực hành về phân tích SQL, kho dữ liệu, Power BI và phân khúc khách hàng. Công việc của tôi kết nối dữ liệu đã kiểm tra chất lượng, phân tích và đầu ra hướng đến nghiệp vụ.",
            "Tôi thích làm cho dữ liệu dễ hiểu hơn: xác định câu hỏi, kiểm tra số liệu và truyền đạt insight rõ ràng.",
          ],
          points: [
            ["SQL & nền tảng phân tích", "Truy vấn, kiểm tra và khám phá dữ liệu cấu trúc để có câu trả lời đáng tin cậy."],
            ["Kho dữ liệu & BI", "Xây dựng kho dữ liệu dạng star schema và báo cáo Power BI cho phân tích phục vụ nghiệp vụ."],
            ["Hỗ trợ quyết định", "Phân khúc khách hàng và các câu chuyện dữ liệu rõ ràng, nối bằng chứng với hành động."],
          ],
        },
        expertise: {
          kicker: "TRỌNG TÂM PHÂN TÍCH",
          heading: ["Kỹ năng cho", "quyết định dựa trên dữ liệu đáng tin."],
          description: "Tôi dùng SQL, mô hình dữ liệu, BI và phương pháp phân tích để chuyển dữ liệu cấu trúc thành thông tin rõ ràng, sẵn sàng cho quyết định.",
          cards: [
            ["SQL & phân tích dữ liệu", "Khám phá, kiểm tra và phân tích dữ liệu cấu trúc với SQL, Python, Pandas và NumPy.", ["SQL", "Python", "Pandas", "NumPy"]],
            ["Kho dữ liệu & BI", "Xây dựng lớp phân tích đáng tin cậy với SQL Server, star schema, DAX và Power BI.", ["SQL Server", "Power BI", "Star Schema", "DAX"]],
            ["Phân tích khách hàng & quyết định", "Phân khúc hành vi khách hàng và truyền đạt mẫu hình qua dashboard, phân tích tập trung.", ["K-Means", "Segmentation", "Streamlit", "R"]],
          ],
        },
        projects: {
          kicker: "DỰ ÁN PHÂN TÍCH TIÊU BIỂU",
          heading: ["Một số dự án về", "dữ liệu và hỗ trợ quyết định."],
          title: "Dự án phân tích tiêu biểu",
          subtitle: "Dự án được sắp theo bằng chứng mạnh nhất về phân tích SQL, chất lượng dữ liệu, BI và quy trình hỗ trợ quyết định.",
          descriptions: {
            "fmcg-multi-country-sales": "Phân tích 1,05 triệu bản ghi FMCG tại sáu quốc gia để hỗ trợ ưu tiên lập kế hoạch; 20% SKU hàng đầu tạo ra 50,04% doanh thu thuần, với SQL Server và Power BI được đối soát làm planning guardrail.",
            "fnb-supply-chain": "Xây dựng dashboard Power BI cho giám sát chuỗi cung ứng; xác thực 11 KPI DAX gồm đơn hàng, gross margin và OTIF sau EDA, kiểm tra chất lượng dữ liệu và làm sạch Power Query.",
            "xom-bank": "Phân tích hơn 157 nghìn giao dịch ngân hàng trong SQL Server/Power BI, vượt 19/19 kiểm tra chất lượng dữ liệu và phân khúc hơn 2 nghìn hồ sơ khách hàng để hỗ trợ quyết định.",
            dagpt: "Triển khai trợ lý dữ liệu self-service, chuyển CSV tải lên và câu hỏi ngôn ngữ tự nhiên thành phân tích và biểu đồ tương tác để khám phá nhanh hơn.",
          },
        },
        contact: {
          heading: ["Hãy làm dữ liệu", "dễ sử dụng hơn."],
          description: "Tôi hiện tìm kiếm vị trí Data Analyst để đóng góp vào phân tích SQL, chất lượng dữ liệu, báo cáo BI và hỗ trợ quyết định.",
        },
        footer: {
          description: "Làm dữ liệu cấu trúc trở nên đáng tin, dễ khám phá và hữu ích cho các quyết định thực tế.",
          status: "Sẵn sàng cho các cơ hội Data Analyst",
        },
      },
    },
  },
  de: {
    cvHref: "assets/Le_Hoang_Gia_Vi_CV_Data_Engineer.pdf",
    projectPriorities: {
      "fmcg-multi-country-sales": 2,
      "fnb-supply-chain": 3,
      "xom-bank": 1,
      "smart-class": 9,
      clen: 11,
      dagpt: 5,
      "cacao-shield": 10,
      "fraud-detection": 4,
      "parking-slot": 8,
      "heart-disease": 7,
      "vnstock-ai": 6,
    },
    copy: {
      en: {
        meta: {
          title: "Le Hoang Gia Vi | Data Engineer",
          description: "Le Hoang Gia Vi — Data Engineer portfolio with SQL, data warehousing, data quality, banking analytics and AWS data pipelines.",
        },
        hero: {
          eyebrow: "DATA ENGINEERING · SQL · CLOUD DATA PIPELINES",
          titlePrimary: "Building reliable data foundations",
          titleSecondary: "for analytics and ML.",
          roleLabel: "Le Hoang Gia Vi — Fresher Data Engineer",
          description: "Final-year Data Science student with hands-on work in <strong>SQL, data warehousing, data quality, banking analytics and AWS data pipelines</strong>. I build data flows that are easier to validate, store and use for reporting or machine learning.",
          primaryAction: "Explore Data Engineering Work",
          status: "Open to Fresher Data Engineer opportunities",
          technologies: [
            ["simple-icons:python", "Python"],
            ["simple-icons:postgresql", "SQL"],
            ["lucide:database", "SQL Server"],
            ["simple-icons:amazonaws", "AWS"],
            ["lucide:workflow", "ETL/ELT"],
            ["simple-icons:mongodb", "MongoDB"],
          ],
        },
        about: {
          heading: ["From raw data to", "trusted data pipelines."],
          paragraphs: [
            "I am a final-year <strong>Data Science</strong> student with project and internship experience across SQL analytics, data warehousing, AWS data services, data-quality checks and finance/banking datasets.",
            "I focus on practical data engineering work: understand the source, validate the numbers, build a clear pipeline and make the output useful for analysts, reports or ML workflows.",
          ],
          points: [
            ["SQL & data modeling", "Structured data querying, warehouse-style modeling and validation for dependable analytics."],
            ["Data quality & automation", "Checks, reconciliation and repeatable pipelines that reduce manual data handling errors."],
            ["Cloud data delivery", "AWS Lambda, Kinesis, Firehose, S3 and SageMaker flows for data-driven applications."],
          ],
        },
        expertise: {
          kicker: "DATA ENGINEERING FOCUS",
          heading: ["Skills for", "reliable data platforms."],
          description: "I connect SQL, Python, cloud services and data-quality thinking to move data from source systems into useful analytical and ML-ready outputs.",
          cards: [
            ["SQL, Warehousing & Modeling", "Build structured analysis layers with SQL Server, star schemas and validated Power BI outputs.", ["SQL", "SQL Server", "Star Schema", "Power BI"]],
            ["Python ETL & Data Quality", "Prepare, transform and check data with Python, Pandas and reproducible validation steps.", ["Python", "Pandas", "NumPy", "Data Checks"]],
            ["Cloud Data Pipelines", "Build cloud-backed data flows using AWS services for ingestion, processing, alerts and storage.", ["AWS Lambda", "Kinesis", "Firehose", "S3"]],
          ],
        },
        projects: {
          kicker: "FEATURED DATA ENGINEERING WORK",
          heading: ["Selected work in", "pipelines and data platforms."],
          title: "Selected data engineering work",
          subtitle: "Projects are ordered around the strongest evidence for banking data, SQL pipelines, warehouse modeling, data quality and cloud data delivery.",
          descriptions: {
            "xom-bank": "Built a SQL-to-Power BI data pipeline over 157K+ banking transactions, added 19/19 quality checks and prepared 2K+ customer profiles for segmentation.",
            "fmcg-multi-country-sales": "Processed 1.05M sales records across six countries, reconciled SQL Server and Power BI outputs and benchmarked XGBoost at 26.97% test WAPE.",
            "fnb-supply-chain": "Prepared order/inventory data with Pandas EDA, Power Query cleaning and quality checks; modeled the dataset and validated 11 DAX/Power BI KPIs.",
            "fraud-detection": "Built an imbalanced financial-transaction modeling pipeline with SMOTE-ENN preprocessing and Bi-LSTM training, reaching AUC 0.990 and Recall 0.953.",
          },
        },
        contact: {
          heading: ["Let's build trusted", "data foundations."],
          description: "I am currently seeking a Data Engineer role where I can contribute to SQL pipelines, data quality, cloud data services and analytics-ready data platforms.",
        },
        footer: {
          description: "Building reliable data flows for analytics, reporting and machine-learning use cases.",
          status: "Available for Data Engineer opportunities",
        },
      },
      vi: {
        meta: {
          title: "Le Hoang Gia Vi | Kỹ sư Dữ liệu",
          description: "Portfolio Kỹ sư Dữ liệu của Le Hoang Gia Vi với SQL, kho dữ liệu, chất lượng dữ liệu, phân tích ngân hàng và pipeline dữ liệu AWS.",
        },
        hero: {
          eyebrow: "KỸ THUẬT DỮ LIỆU · SQL · PIPELINE DỮ LIỆU ĐÁM MÂY",
          titlePrimary: "Xây dựng nền tảng dữ liệu đáng tin",
          titleSecondary: "cho phân tích và ML.",
          roleLabel: "Le Hoang Gia Vi — Data Engineer Fresher",
          description: "Sinh viên năm cuối ngành Khoa học Dữ liệu với kinh nghiệm thực hành về <strong>SQL, kho dữ liệu, chất lượng dữ liệu, phân tích ngân hàng và pipeline dữ liệu AWS</strong>. Tôi xây dựng luồng dữ liệu dễ kiểm tra, lưu trữ và sử dụng cho báo cáo hoặc học máy.",
          primaryAction: "Khám phá dự án Kỹ thuật Dữ liệu",
          status: "Sẵn sàng cho các vị trí Data Engineer Fresher",
          technologies: [
            ["simple-icons:python", "Python"],
            ["simple-icons:postgresql", "SQL"],
            ["lucide:database", "SQL Server"],
            ["simple-icons:amazonaws", "AWS"],
            ["lucide:workflow", "ETL/ELT"],
            ["simple-icons:mongodb", "MongoDB"],
          ],
        },
        about: {
          heading: ["Từ dữ liệu thô đến", "pipeline đáng tin."],
          paragraphs: [
            "Tôi là sinh viên năm cuối ngành <strong>Khoa học Dữ liệu</strong>, có kinh nghiệm qua dự án và thực tập về phân tích SQL, kho dữ liệu, dịch vụ dữ liệu AWS, kiểm tra chất lượng dữ liệu và bộ dữ liệu tài chính/ngân hàng.",
            "Tôi tập trung vào kỹ thuật dữ liệu thực tiễn: hiểu nguồn dữ liệu, kiểm tra số liệu, xây dựng pipeline rõ ràng và tạo đầu ra hữu ích cho analyst, báo cáo hoặc quy trình ML.",
          ],
          points: [
            ["SQL & mô hình dữ liệu", "Truy vấn dữ liệu cấu trúc, mô hình dạng kho dữ liệu và kiểm tra để hỗ trợ phân tích đáng tin."],
            ["Chất lượng dữ liệu & tự động hóa", "Kiểm tra, đối soát và pipeline lặp lại được để giảm lỗi xử lý dữ liệu thủ công."],
            ["Triển khai dữ liệu đám mây", "Luồng AWS Lambda, Kinesis, Firehose, S3 và SageMaker cho ứng dụng dựa trên dữ liệu."],
          ],
        },
        expertise: {
          kicker: "TRỌNG TÂM KỸ THUẬT DỮ LIỆU",
          heading: ["Kỹ năng cho", "nền tảng dữ liệu đáng tin."],
          description: "Tôi kết nối SQL, Python, dịch vụ đám mây và tư duy chất lượng dữ liệu để đưa dữ liệu từ nguồn vào đầu ra sẵn sàng cho phân tích và ML.",
          cards: [
            ["SQL, kho dữ liệu & mô hình", "Xây dựng lớp phân tích có cấu trúc với SQL Server, star schema và đầu ra Power BI đã kiểm tra.", ["SQL", "SQL Server", "Star Schema", "Power BI"]],
            ["ETL Python & chất lượng dữ liệu", "Chuẩn bị, chuyển đổi và kiểm tra dữ liệu bằng Python, Pandas và các bước xác thực có thể tái lập.", ["Python", "Pandas", "NumPy", "Data Checks"]],
            ["Pipeline dữ liệu đám mây", "Xây dựng luồng dữ liệu trên đám mây bằng dịch vụ AWS cho nhập dữ liệu, xử lý, cảnh báo và lưu trữ.", ["AWS Lambda", "Kinesis", "Firehose", "S3"]],
          ],
        },
        projects: {
          kicker: "DỰ ÁN KỸ THUẬT DỮ LIỆU TIÊU BIỂU",
          heading: ["Một số dự án về", "pipeline và nền tảng dữ liệu."],
          title: "Dự án Kỹ thuật Dữ liệu tiêu biểu",
          subtitle: "Dự án được sắp theo bằng chứng mạnh nhất về dữ liệu ngân hàng, pipeline SQL, mô hình kho dữ liệu, chất lượng dữ liệu và triển khai dữ liệu đám mây.",
          descriptions: {
            "xom-bank": "Xây dựng pipeline dữ liệu SQL-to-Power BI trên hơn 157 nghìn giao dịch ngân hàng, thêm 19/19 kiểm tra chất lượng và chuẩn bị hơn 2 nghìn hồ sơ khách hàng để phân khúc.",
            "fmcg-multi-country-sales": "Xử lý 1,05 triệu bản ghi bán hàng tại sáu quốc gia, đối soát đầu ra SQL Server/Power BI và benchmark XGBoost ở mức WAPE kiểm thử 26,97%.",
            "fnb-supply-chain": "Chuẩn bị dữ liệu đơn hàng/tồn kho bằng Pandas EDA, làm sạch Power Query và kiểm tra chất lượng; mô hình hóa dataset và xác thực 11 KPI DAX/Power BI.",
            "fraud-detection": "Xây dựng pipeline mô hình hóa giao dịch tài chính mất cân bằng với tiền xử lý SMOTE-ENN và Bi-LSTM, đạt AUC 0.990 và Recall 0.953.",
          },
        },
        contact: {
          heading: ["Hãy xây dựng nền tảng", "dữ liệu đáng tin."],
          description: "Tôi hiện tìm kiếm vị trí Data Engineer để đóng góp vào pipeline SQL, chất lượng dữ liệu, dịch vụ dữ liệu đám mây và nền tảng dữ liệu sẵn sàng cho phân tích.",
        },
        footer: {
          description: "Xây dựng luồng dữ liệu đáng tin cho phân tích, báo cáo và ứng dụng học máy.",
          status: "Sẵn sàng cho các cơ hội Data Engineer",
        },
      },
    },
  },
};

if (typeof window !== "undefined") window.roleProfiles = roleProfiles;
if (typeof module !== "undefined") module.exports = roleProfiles;
