cmd_Release/fana.node := ln -f "Release/obj.target/fana.node" "Release/fana.node" 2>/dev/null || (rm -rf "Release/fana.node" && cp -af "Release/obj.target/fana.node" "Release/fana.node")
