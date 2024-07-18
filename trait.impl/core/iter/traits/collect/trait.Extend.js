(function() {var implementors = {
"bitvec":[["impl&lt;'a, M, T1, T2, O1, O2&gt; Extend&lt;<a class=\"struct\" href=\"bitvec/ptr/struct.BitRef.html\" title=\"struct bitvec::ptr::BitRef\">BitRef</a>&lt;'a, M, T2, O2&gt;&gt; for <a class=\"struct\" href=\"bitvec/vec/struct.BitVec.html\" title=\"struct bitvec::vec::BitVec\">BitVec</a>&lt;T1, O1&gt;<div class=\"where\">where\n    M: <a class=\"trait\" href=\"bitvec/ptr/trait.Mutability.html\" title=\"trait bitvec::ptr::Mutability\">Mutability</a>,\n    T1: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,\n    T2: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,\n    O1: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,\n    O2: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,</div>"],["impl&lt;'a, T, O&gt; Extend&lt;&amp;'a T&gt; for <a class=\"struct\" href=\"bitvec/vec/struct.BitVec.html\" title=\"struct bitvec::vec::BitVec\">BitVec</a>&lt;T, O&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,</div>"],["impl&lt;'a, T, O&gt; Extend&lt;&amp;'a bool&gt; for <a class=\"struct\" href=\"bitvec/vec/struct.BitVec.html\" title=\"struct bitvec::vec::BitVec\">BitVec</a>&lt;T, O&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,</div>"],["impl&lt;T, O&gt; Extend&lt;T&gt; for <a class=\"struct\" href=\"bitvec/vec/struct.BitVec.html\" title=\"struct bitvec::vec::BitVec\">BitVec</a>&lt;T, O&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,</div>"],["impl&lt;T, O&gt; Extend&lt;bool&gt; for <a class=\"struct\" href=\"bitvec/vec/struct.BitVec.html\" title=\"struct bitvec::vec::BitVec\">BitVec</a>&lt;T, O&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,</div>"]],
"multiboot2":[["impl Extend&lt;<a class=\"struct\" href=\"multiboot2/struct.ElfSectionFlags.html\" title=\"struct multiboot2::ElfSectionFlags\">ElfSectionFlags</a>&gt; for <a class=\"struct\" href=\"multiboot2/struct.ElfSectionFlags.html\" title=\"struct multiboot2::ElfSectionFlags\">ElfSectionFlags</a>"],["impl Extend&lt;<a class=\"struct\" href=\"multiboot2/struct.VBECapabilities.html\" title=\"struct multiboot2::VBECapabilities\">VBECapabilities</a>&gt; for <a class=\"struct\" href=\"multiboot2/struct.VBECapabilities.html\" title=\"struct multiboot2::VBECapabilities\">VBECapabilities</a>"],["impl Extend&lt;<a class=\"struct\" href=\"multiboot2/struct.VBEDirectColorAttributes.html\" title=\"struct multiboot2::VBEDirectColorAttributes\">VBEDirectColorAttributes</a>&gt; for <a class=\"struct\" href=\"multiboot2/struct.VBEDirectColorAttributes.html\" title=\"struct multiboot2::VBEDirectColorAttributes\">VBEDirectColorAttributes</a>"],["impl Extend&lt;<a class=\"struct\" href=\"multiboot2/struct.VBEModeAttributes.html\" title=\"struct multiboot2::VBEModeAttributes\">VBEModeAttributes</a>&gt; for <a class=\"struct\" href=\"multiboot2/struct.VBEModeAttributes.html\" title=\"struct multiboot2::VBEModeAttributes\">VBEModeAttributes</a>"],["impl Extend&lt;<a class=\"struct\" href=\"multiboot2/struct.VBEWindowAttributes.html\" title=\"struct multiboot2::VBEWindowAttributes\">VBEWindowAttributes</a>&gt; for <a class=\"struct\" href=\"multiboot2/struct.VBEWindowAttributes.html\" title=\"struct multiboot2::VBEWindowAttributes\">VBEWindowAttributes</a>"]],
"ostd":[["impl Extend&lt;<a class=\"struct\" href=\"ostd/bus/pci/cfg_space/struct.Command.html\" title=\"struct ostd::bus::pci::cfg_space::Command\">Command</a>&gt; for <a class=\"struct\" href=\"ostd/bus/pci/cfg_space/struct.Command.html\" title=\"struct ostd::bus::pci::cfg_space::Command\">Command</a>"],["impl Extend&lt;<a class=\"struct\" href=\"ostd/bus/pci/cfg_space/struct.Status.html\" title=\"struct ostd::bus::pci::cfg_space::Status\">Status</a>&gt; for <a class=\"struct\" href=\"ostd/bus/pci/cfg_space/struct.Status.html\" title=\"struct ostd::bus::pci::cfg_space::Status\">Status</a>"],["impl Extend&lt;<a class=\"struct\" href=\"ostd/cpu/struct.PageFaultErrorCode.html\" title=\"struct ostd::cpu::PageFaultErrorCode\">PageFaultErrorCode</a>&gt; for <a class=\"struct\" href=\"ostd/cpu/struct.PageFaultErrorCode.html\" title=\"struct ostd::cpu::PageFaultErrorCode\">PageFaultErrorCode</a>"],["impl Extend&lt;<a class=\"struct\" href=\"ostd/mm/struct.PageFlags.html\" title=\"struct ostd::mm::PageFlags\">PageFlags</a>&gt; for <a class=\"struct\" href=\"ostd/mm/struct.PageFlags.html\" title=\"struct ostd::mm::PageFlags\">PageFlags</a>"]],
"smallvec":[["impl&lt;A: <a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt; Extend&lt;&lt;A as <a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt;::<a class=\"associatedtype\" href=\"smallvec/trait.Array.html#associatedtype.Item\" title=\"type smallvec::Array::Item\">Item</a>&gt; for <a class=\"struct\" href=\"smallvec/struct.SmallVec.html\" title=\"struct smallvec::SmallVec\">SmallVec</a>&lt;A&gt;"]],
"tdx_guest":[["impl Extend&lt;<a class=\"struct\" href=\"tdx_guest/tdcall/struct.GpaAttr.html\" title=\"struct tdx_guest::tdcall::GpaAttr\">GpaAttr</a>&gt; for <a class=\"struct\" href=\"tdx_guest/tdcall/struct.GpaAttr.html\" title=\"struct tdx_guest::tdcall::GpaAttr\">GpaAttr</a>"],["impl Extend&lt;<a class=\"struct\" href=\"tdx_guest/tdcall/struct.GuestTdAttributes.html\" title=\"struct tdx_guest::tdcall::GuestTdAttributes\">GuestTdAttributes</a>&gt; for <a class=\"struct\" href=\"tdx_guest/tdcall/struct.GuestTdAttributes.html\" title=\"struct tdx_guest::tdcall::GuestTdAttributes\">GuestTdAttributes</a>"]],
"uefi_raw":[["impl Extend&lt;<a class=\"struct\" href=\"uefi_raw/capsule/struct.CapsuleFlags.html\" title=\"struct uefi_raw::capsule::CapsuleFlags\">CapsuleFlags</a>&gt; for <a class=\"struct\" href=\"uefi_raw/capsule/struct.CapsuleFlags.html\" title=\"struct uefi_raw::capsule::CapsuleFlags\">CapsuleFlags</a>"],["impl Extend&lt;<a class=\"struct\" href=\"uefi_raw/protocol/console/serial/struct.ControlBits.html\" title=\"struct uefi_raw::protocol::console::serial::ControlBits\">ControlBits</a>&gt; for <a class=\"struct\" href=\"uefi_raw/protocol/console/serial/struct.ControlBits.html\" title=\"struct uefi_raw::protocol::console::serial::ControlBits\">ControlBits</a>"],["impl Extend&lt;<a class=\"struct\" href=\"uefi_raw/protocol/console/struct.AbsolutePointerModeAttributes.html\" title=\"struct uefi_raw::protocol::console::AbsolutePointerModeAttributes\">AbsolutePointerModeAttributes</a>&gt; for <a class=\"struct\" href=\"uefi_raw/protocol/console/struct.AbsolutePointerModeAttributes.html\" title=\"struct uefi_raw::protocol::console::AbsolutePointerModeAttributes\">AbsolutePointerModeAttributes</a>"],["impl Extend&lt;<a class=\"struct\" href=\"uefi_raw/protocol/file_system/struct.FileAttribute.html\" title=\"struct uefi_raw::protocol::file_system::FileAttribute\">FileAttribute</a>&gt; for <a class=\"struct\" href=\"uefi_raw/protocol/file_system/struct.FileAttribute.html\" title=\"struct uefi_raw::protocol::file_system::FileAttribute\">FileAttribute</a>"],["impl Extend&lt;<a class=\"struct\" href=\"uefi_raw/protocol/file_system/struct.FileMode.html\" title=\"struct uefi_raw::protocol::file_system::FileMode\">FileMode</a>&gt; for <a class=\"struct\" href=\"uefi_raw/protocol/file_system/struct.FileMode.html\" title=\"struct uefi_raw::protocol::file_system::FileMode\">FileMode</a>"],["impl Extend&lt;<a class=\"struct\" href=\"uefi_raw/table/boot/struct.EventType.html\" title=\"struct uefi_raw::table::boot::EventType\">EventType</a>&gt; for <a class=\"struct\" href=\"uefi_raw/table/boot/struct.EventType.html\" title=\"struct uefi_raw::table::boot::EventType\">EventType</a>"],["impl Extend&lt;<a class=\"struct\" href=\"uefi_raw/table/boot/struct.MemoryAttribute.html\" title=\"struct uefi_raw::table::boot::MemoryAttribute\">MemoryAttribute</a>&gt; for <a class=\"struct\" href=\"uefi_raw/table/boot/struct.MemoryAttribute.html\" title=\"struct uefi_raw::table::boot::MemoryAttribute\">MemoryAttribute</a>"],["impl Extend&lt;<a class=\"struct\" href=\"uefi_raw/table/runtime/struct.VariableAttributes.html\" title=\"struct uefi_raw::table::runtime::VariableAttributes\">VariableAttributes</a>&gt; for <a class=\"struct\" href=\"uefi_raw/table/runtime/struct.VariableAttributes.html\" title=\"struct uefi_raw::table::runtime::VariableAttributes\">VariableAttributes</a>"],["impl Extend&lt;<a class=\"struct\" href=\"uefi_raw/time/struct.Daylight.html\" title=\"struct uefi_raw::time::Daylight\">Daylight</a>&gt; for <a class=\"struct\" href=\"uefi_raw/time/struct.Daylight.html\" title=\"struct uefi_raw::time::Daylight\">Daylight</a>"]],
"x86":[["impl Extend&lt;<a class=\"struct\" href=\"x86/bits32/eflags/struct.EFlags.html\" title=\"struct x86::bits32::eflags::EFlags\">EFlags</a>&gt; for <a class=\"struct\" href=\"x86/bits32/eflags/struct.EFlags.html\" title=\"struct x86::bits32::eflags::EFlags\">EFlags</a>"],["impl Extend&lt;<a class=\"struct\" href=\"x86/bits32/paging/struct.PDFlags.html\" title=\"struct x86::bits32::paging::PDFlags\">PDFlags</a>&gt; for <a class=\"struct\" href=\"x86/bits32/paging/struct.PDFlags.html\" title=\"struct x86::bits32::paging::PDFlags\">PDFlags</a>"],["impl Extend&lt;<a class=\"struct\" href=\"x86/bits32/paging/struct.PTFlags.html\" title=\"struct x86::bits32::paging::PTFlags\">PTFlags</a>&gt; for <a class=\"struct\" href=\"x86/bits32/paging/struct.PTFlags.html\" title=\"struct x86::bits32::paging::PTFlags\">PTFlags</a>"],["impl Extend&lt;<a class=\"struct\" href=\"x86/bits64/paging/struct.PDFlags.html\" title=\"struct x86::bits64::paging::PDFlags\">PDFlags</a>&gt; for <a class=\"struct\" href=\"x86/bits64/paging/struct.PDFlags.html\" title=\"struct x86::bits64::paging::PDFlags\">PDFlags</a>"],["impl Extend&lt;<a class=\"struct\" href=\"x86/bits64/paging/struct.PDPTFlags.html\" title=\"struct x86::bits64::paging::PDPTFlags\">PDPTFlags</a>&gt; for <a class=\"struct\" href=\"x86/bits64/paging/struct.PDPTFlags.html\" title=\"struct x86::bits64::paging::PDPTFlags\">PDPTFlags</a>"],["impl Extend&lt;<a class=\"struct\" href=\"x86/bits64/paging/struct.PML4Flags.html\" title=\"struct x86::bits64::paging::PML4Flags\">PML4Flags</a>&gt; for <a class=\"struct\" href=\"x86/bits64/paging/struct.PML4Flags.html\" title=\"struct x86::bits64::paging::PML4Flags\">PML4Flags</a>"],["impl Extend&lt;<a class=\"struct\" href=\"x86/bits64/paging/struct.PML5Flags.html\" title=\"struct x86::bits64::paging::PML5Flags\">PML5Flags</a>&gt; for <a class=\"struct\" href=\"x86/bits64/paging/struct.PML5Flags.html\" title=\"struct x86::bits64::paging::PML5Flags\">PML5Flags</a>"],["impl Extend&lt;<a class=\"struct\" href=\"x86/bits64/paging/struct.PTFlags.html\" title=\"struct x86::bits64::paging::PTFlags\">PTFlags</a>&gt; for <a class=\"struct\" href=\"x86/bits64/paging/struct.PTFlags.html\" title=\"struct x86::bits64::paging::PTFlags\">PTFlags</a>"],["impl Extend&lt;<a class=\"struct\" href=\"x86/bits64/rflags/struct.RFlags.html\" title=\"struct x86::bits64::rflags::RFlags\">RFlags</a>&gt; for <a class=\"struct\" href=\"x86/bits64/rflags/struct.RFlags.html\" title=\"struct x86::bits64::rflags::RFlags\">RFlags</a>"],["impl Extend&lt;<a class=\"struct\" href=\"x86/controlregs/struct.Cr0.html\" title=\"struct x86::controlregs::Cr0\">Cr0</a>&gt; for <a class=\"struct\" href=\"x86/controlregs/struct.Cr0.html\" title=\"struct x86::controlregs::Cr0\">Cr0</a>"],["impl Extend&lt;<a class=\"struct\" href=\"x86/controlregs/struct.Cr4.html\" title=\"struct x86::controlregs::Cr4\">Cr4</a>&gt; for <a class=\"struct\" href=\"x86/controlregs/struct.Cr4.html\" title=\"struct x86::controlregs::Cr4\">Cr4</a>"],["impl Extend&lt;<a class=\"struct\" href=\"x86/controlregs/struct.Xcr0.html\" title=\"struct x86::controlregs::Xcr0\">Xcr0</a>&gt; for <a class=\"struct\" href=\"x86/controlregs/struct.Xcr0.html\" title=\"struct x86::controlregs::Xcr0\">Xcr0</a>"],["impl Extend&lt;<a class=\"struct\" href=\"x86/debugregs/struct.Dr6.html\" title=\"struct x86::debugregs::Dr6\">Dr6</a>&gt; for <a class=\"struct\" href=\"x86/debugregs/struct.Dr6.html\" title=\"struct x86::debugregs::Dr6\">Dr6</a>"],["impl Extend&lt;<a class=\"struct\" href=\"x86/irq/struct.PageFaultError.html\" title=\"struct x86::irq::PageFaultError\">PageFaultError</a>&gt; for <a class=\"struct\" href=\"x86/irq/struct.PageFaultError.html\" title=\"struct x86::irq::PageFaultError\">PageFaultError</a>"],["impl Extend&lt;<a class=\"struct\" href=\"x86/segmentation/struct.SegmentSelector.html\" title=\"struct x86::segmentation::SegmentSelector\">SegmentSelector</a>&gt; for <a class=\"struct\" href=\"x86/segmentation/struct.SegmentSelector.html\" title=\"struct x86::segmentation::SegmentSelector\">SegmentSelector</a>"],["impl Extend&lt;<a class=\"struct\" href=\"x86/vmx/vmcs/control/struct.EntryControls.html\" title=\"struct x86::vmx::vmcs::control::EntryControls\">EntryControls</a>&gt; for <a class=\"struct\" href=\"x86/vmx/vmcs/control/struct.EntryControls.html\" title=\"struct x86::vmx::vmcs::control::EntryControls\">EntryControls</a>"],["impl Extend&lt;<a class=\"struct\" href=\"x86/vmx/vmcs/control/struct.ExitControls.html\" title=\"struct x86::vmx::vmcs::control::ExitControls\">ExitControls</a>&gt; for <a class=\"struct\" href=\"x86/vmx/vmcs/control/struct.ExitControls.html\" title=\"struct x86::vmx::vmcs::control::ExitControls\">ExitControls</a>"],["impl Extend&lt;<a class=\"struct\" href=\"x86/vmx/vmcs/control/struct.PinbasedControls.html\" title=\"struct x86::vmx::vmcs::control::PinbasedControls\">PinbasedControls</a>&gt; for <a class=\"struct\" href=\"x86/vmx/vmcs/control/struct.PinbasedControls.html\" title=\"struct x86::vmx::vmcs::control::PinbasedControls\">PinbasedControls</a>"],["impl Extend&lt;<a class=\"struct\" href=\"x86/vmx/vmcs/control/struct.PrimaryControls.html\" title=\"struct x86::vmx::vmcs::control::PrimaryControls\">PrimaryControls</a>&gt; for <a class=\"struct\" href=\"x86/vmx/vmcs/control/struct.PrimaryControls.html\" title=\"struct x86::vmx::vmcs::control::PrimaryControls\">PrimaryControls</a>"],["impl Extend&lt;<a class=\"struct\" href=\"x86/vmx/vmcs/control/struct.SecondaryControls.html\" title=\"struct x86::vmx::vmcs::control::SecondaryControls\">SecondaryControls</a>&gt; for <a class=\"struct\" href=\"x86/vmx/vmcs/control/struct.SecondaryControls.html\" title=\"struct x86::vmx::vmcs::control::SecondaryControls\">SecondaryControls</a>"]],
"x86_64":[["impl Extend&lt;<a class=\"struct\" href=\"x86_64/registers/control/struct.Cr0Flags.html\" title=\"struct x86_64::registers::control::Cr0Flags\">Cr0Flags</a>&gt; for <a class=\"struct\" href=\"x86_64/registers/control/struct.Cr0Flags.html\" title=\"struct x86_64::registers::control::Cr0Flags\">Cr0Flags</a>"],["impl Extend&lt;<a class=\"struct\" href=\"x86_64/registers/control/struct.Cr3Flags.html\" title=\"struct x86_64::registers::control::Cr3Flags\">Cr3Flags</a>&gt; for <a class=\"struct\" href=\"x86_64/registers/control/struct.Cr3Flags.html\" title=\"struct x86_64::registers::control::Cr3Flags\">Cr3Flags</a>"],["impl Extend&lt;<a class=\"struct\" href=\"x86_64/registers/control/struct.Cr4Flags.html\" title=\"struct x86_64::registers::control::Cr4Flags\">Cr4Flags</a>&gt; for <a class=\"struct\" href=\"x86_64/registers/control/struct.Cr4Flags.html\" title=\"struct x86_64::registers::control::Cr4Flags\">Cr4Flags</a>"],["impl Extend&lt;<a class=\"struct\" href=\"x86_64/registers/debug/struct.Dr6Flags.html\" title=\"struct x86_64::registers::debug::Dr6Flags\">Dr6Flags</a>&gt; for <a class=\"struct\" href=\"x86_64/registers/debug/struct.Dr6Flags.html\" title=\"struct x86_64::registers::debug::Dr6Flags\">Dr6Flags</a>"],["impl Extend&lt;<a class=\"struct\" href=\"x86_64/registers/debug/struct.Dr7Flags.html\" title=\"struct x86_64::registers::debug::Dr7Flags\">Dr7Flags</a>&gt; for <a class=\"struct\" href=\"x86_64/registers/debug/struct.Dr7Flags.html\" title=\"struct x86_64::registers::debug::Dr7Flags\">Dr7Flags</a>"],["impl Extend&lt;<a class=\"struct\" href=\"x86_64/registers/model_specific/struct.CetFlags.html\" title=\"struct x86_64::registers::model_specific::CetFlags\">CetFlags</a>&gt; for <a class=\"struct\" href=\"x86_64/registers/model_specific/struct.CetFlags.html\" title=\"struct x86_64::registers::model_specific::CetFlags\">CetFlags</a>"],["impl Extend&lt;<a class=\"struct\" href=\"x86_64/registers/model_specific/struct.EferFlags.html\" title=\"struct x86_64::registers::model_specific::EferFlags\">EferFlags</a>&gt; for <a class=\"struct\" href=\"x86_64/registers/model_specific/struct.EferFlags.html\" title=\"struct x86_64::registers::model_specific::EferFlags\">EferFlags</a>"],["impl Extend&lt;<a class=\"struct\" href=\"x86_64/registers/mxcsr/struct.MxCsr.html\" title=\"struct x86_64::registers::mxcsr::MxCsr\">MxCsr</a>&gt; for <a class=\"struct\" href=\"x86_64/registers/mxcsr/struct.MxCsr.html\" title=\"struct x86_64::registers::mxcsr::MxCsr\">MxCsr</a>"],["impl Extend&lt;<a class=\"struct\" href=\"x86_64/registers/rflags/struct.RFlags.html\" title=\"struct x86_64::registers::rflags::RFlags\">RFlags</a>&gt; for <a class=\"struct\" href=\"x86_64/registers/rflags/struct.RFlags.html\" title=\"struct x86_64::registers::rflags::RFlags\">RFlags</a>"],["impl Extend&lt;<a class=\"struct\" href=\"x86_64/registers/xcontrol/struct.XCr0Flags.html\" title=\"struct x86_64::registers::xcontrol::XCr0Flags\">XCr0Flags</a>&gt; for <a class=\"struct\" href=\"x86_64/registers/xcontrol/struct.XCr0Flags.html\" title=\"struct x86_64::registers::xcontrol::XCr0Flags\">XCr0Flags</a>"],["impl Extend&lt;<a class=\"struct\" href=\"x86_64/structures/gdt/struct.DescriptorFlags.html\" title=\"struct x86_64::structures::gdt::DescriptorFlags\">DescriptorFlags</a>&gt; for <a class=\"struct\" href=\"x86_64/structures/gdt/struct.DescriptorFlags.html\" title=\"struct x86_64::structures::gdt::DescriptorFlags\">DescriptorFlags</a>"],["impl Extend&lt;<a class=\"struct\" href=\"x86_64/structures/idt/struct.PageFaultErrorCode.html\" title=\"struct x86_64::structures::idt::PageFaultErrorCode\">PageFaultErrorCode</a>&gt; for <a class=\"struct\" href=\"x86_64/structures/idt/struct.PageFaultErrorCode.html\" title=\"struct x86_64::structures::idt::PageFaultErrorCode\">PageFaultErrorCode</a>"],["impl Extend&lt;<a class=\"struct\" href=\"x86_64/structures/paging/page_table/struct.PageTableFlags.html\" title=\"struct x86_64::structures::paging::page_table::PageTableFlags\">PageTableFlags</a>&gt; for <a class=\"struct\" href=\"x86_64/structures/paging/page_table/struct.PageTableFlags.html\" title=\"struct x86_64::structures::paging::page_table::PageTableFlags\">PageTableFlags</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()